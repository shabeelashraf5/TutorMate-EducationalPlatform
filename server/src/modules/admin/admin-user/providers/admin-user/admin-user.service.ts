import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminRegisterDto } from 'src/modules/admin/admin-auth/dto/ad-register.dto';
import { Admin } from '../../schemas/admin-user.schema';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';
import { User } from 'src/modules/users/schemas/user.schema';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async registerAdmin(registerAdminDto: AdminRegisterDto) {
    const newAdmin = new this.adminModel(registerAdminDto);
    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  }

  async findAdminEmail(email: string) {
    return this.adminModel.findOne({ email }).exec();
  }

  async findAllUsers(userDetailsDto: RegisterDto) {
    return this.userModel.find(userDetailsDto).exec();
  }
}
