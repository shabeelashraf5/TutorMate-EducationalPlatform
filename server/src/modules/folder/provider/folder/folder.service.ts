import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Folder } from '../../schema/folder.schema';
import { Model } from 'mongoose';
import { FolderDto } from '../../../admin/admin-folder/dto/folder.dto';
import { User } from 'src/modules/users/schemas/user.schema';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private folderModel: Model<Folder>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createFolder(folderDto: FolderDto) {
    const newFolder = new this.folderModel(folderDto);
    return await newFolder.save();
  }

  async findFolder(folderDto: FolderDto) {
    return this.folderModel.find(folderDto).exec();
  }

  async userFolder(userId: string) {
    const user = await this.userModel.findById(userId);

    const folder = await this.folderModel.find({ class: user.class });

    return { user, folder };
  }
}
