import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Folder } from '../../schema/folder.schema';
import { Model } from 'mongoose';
import { FolderDto } from '../../../admin/admin-folder/dto/folder.dto';

@Injectable()
export class FolderService {
  constructor(@InjectModel(Folder.name) private folderModel: Model<Folder>) {}

  async createFolder(folderDto: FolderDto) {
    const newFolder = new this.folderModel(folderDto);
    return await newFolder.save();
  }

  async findFolder(folderDto: FolderDto) {
    return this.folderModel.find(folderDto).exec();
  }

  async userFolder(userClass: string) {
    try {
      return await this.folderModel.find({ class: userClass }).exec();
    } catch (error) {
      console.error('Error fetching folders:', error);
      throw new Error('Could not fetch folders.');
    }
  }
}
