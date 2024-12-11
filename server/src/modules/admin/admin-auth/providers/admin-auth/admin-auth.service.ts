import { Injectable } from '@nestjs/common';
import { AdminUserService } from 'src/modules/admin/admin-user/providers/admin-user/admin-user.service';
import { AdminRegisterDto } from '../../dto/ad-register.dto';

@Injectable()
export class AdminAuthService {
  constructor(private readonly adminUser: AdminUserService) {}

  async register(registerAdminDto: AdminRegisterDto) {
    const registerAdmin = await this.adminUser.registerAdmin(registerAdminDto);

    console.log('Response from AdminUserService:', registerAdmin);

    return {
      success: true,
      message: 'Admin registered successfully',
      registerAdmin,
    };
  }
}
