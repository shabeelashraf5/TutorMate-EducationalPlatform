import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AdminUserService } from 'src/modules/admin/admin-user/providers/admin-user/admin-user.service';
import { AdminRegisterDto } from '../../dto/ad-register.dto';
import { AdminLoginDto } from '../../dto/ad-login.dto';
import { JwtAuthService } from 'src/modules/auth/providers/jwt-auth/jwt-auth.service';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly adminUser: AdminUserService,
    private readonly jwtService: JwtAuthService,
  ) {}

  async register(registerAdminDto: AdminRegisterDto) {
    const registerAdmin = await this.adminUser.registerAdmin(registerAdminDto);

    console.log('Response from AdminUserService:', registerAdmin);

    return {
      success: true,
      message: 'Admin registered successfully',
      registerAdmin,
    };
  }

  async AdminLogin(adminLoginDto: AdminLoginDto) {
    const adminLogin = await this.adminUser.findAdminEmail(adminLoginDto.email);

    if (!adminLogin) {
      throw new HttpException('Create your account', HttpStatus.UNAUTHORIZED);
    }

    if (adminLoginDto.password !== adminLogin.password) {
      throw new HttpException('Invalid Password', HttpStatus.BAD_REQUEST);
    }

    const accessToken = await this.jwtService.generateAccessToken(
      adminLogin.id,
      adminLogin.email,
    );

    return {
      success: true,
      message: 'Admin Successfully logged',
      admin: adminLogin,
      token: accessToken,
      role: adminLogin.role,
    };
  }
}
