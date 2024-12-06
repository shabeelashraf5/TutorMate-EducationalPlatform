import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/user.schema';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: RegisterDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async findEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
