import { Body, Controller, Post } from '@nestjs/common';
import { AdminAuthService } from './providers/admin-auth/admin-auth.service';
import { AdminRegisterDto } from './dto/ad-register.dto';
import { AdminLoginDto } from './dto/ad-login.dto';

@Controller('api')
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('admin/register')
  public async registerAdmin(@Body() registerAdminDto: AdminRegisterDto) {
    const response = await this.adminAuthService.register(registerAdminDto);
    return response;
  }

  @Post('admin/login')
  public async loginAdmin(@Body() adminLoginDto: AdminLoginDto) {
    const response = await this.adminAuthService.AdminLogin(adminLoginDto);
    return response;
  }
}
