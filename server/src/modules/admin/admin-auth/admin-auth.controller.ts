import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminAuthService } from './providers/admin-auth/admin-auth.service';
import { AdminRegisterDto } from './dto/ad-register.dto';
import { AdminLoginDto } from './dto/ad-login.dto';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';

@Controller('api/admin')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('register')
  public async registerAdmin(@Body() registerAdminDto: AdminRegisterDto) {
    const response = await this.adminAuthService.register(registerAdminDto);
    return response;
  }

  @Post('dashboard')
  public async loginAdmin(@Body() adminLoginDto: AdminLoginDto) {
    const response = await this.adminAuthService.AdminLogin(adminLoginDto);
    return response;
  }

  @Get('users')
  public async userDetails(userDetailsDto: RegisterDto) {
    const response =
      await this.adminAuthService.displayUserDetails(userDetailsDto);
    return response;
  }
}
