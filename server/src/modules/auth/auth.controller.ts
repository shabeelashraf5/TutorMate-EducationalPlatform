import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './providers/auth/auth.service';
import { LoginDto } from './dto/login.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageUploadOptions } from 'src/config/file-upload.config';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UseInterceptors(FileInterceptor('image', imageUploadOptions))
  public registerUser(
    @Body() registerUser: RegisterDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('Request body:', registerUser);
    console.log('Uploaded file:', file); // This should show the file object
    return this.authService.register(registerUser, file);
  }

  @Post('users/home')
  public async loginUser(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
