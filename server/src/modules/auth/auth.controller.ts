import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './providers/auth/auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('api')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public registerUser(@Body() registerUser: RegisterDto) {
    return this.authService.register(registerUser);
  }

  @Post('login')
  public async loginUser(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
