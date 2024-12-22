import { Injectable } from '@nestjs/common';
import { FolderService } from 'src/modules/folder/provider/folder/folder.service';
import { FolderDto } from '../../dto/folder.dto';

@Injectable()
export class AdminFolderService {
  constructor(private readonly folderService: FolderService) {}

  async createFolder(folderDto: FolderDto) {
    const folder = await this.folderService.createFolder(folderDto);

    return {
      success: true,
      message: 'Folder Created',
      folderDetails: folder,
    };
  }

  async displayFolder(folderDto: FolderDto) {
    const folderDetails = await this.folderService.findFolder(folderDto);
    console.log(folderDetails);

    return {
      success: true,
      message: 'Folder Details Displayed',
      folder: folderDetails,
    };
  }

  async displayUserFolder(userClass: string) {
    console.log('Folder from userClass', userClass);
    const userFolder = await this.folderService.userFolder(userClass);
    console.log('Folder from userFolder', userFolder);

    return {
      success: true,
      message: 'The folder has been displayed as per classes',
      folder: userFolder,
    };
  }
}
