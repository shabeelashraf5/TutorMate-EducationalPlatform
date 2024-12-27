import { Injectable } from '@nestjs/common';
import { FolderService } from 'src/modules/folder/provider/folder/folder.service';
import { FolderDto } from '../../dto/folder.dto';

@Injectable()
export class AdminFolderService {
  constructor(private readonly folderService: FolderService) {}

  async createFolder(folderDto: FolderDto, files: Express.Multer.File[]) {
    console.log(files);
    try {
      const filePaths = files?.map((file) => `${file.originalname}`);
      const folder = await this.folderService.createFolder({
        ...folderDto,
        files: filePaths,
      });
      return {
        success: true,
        message: 'Folder Created',
        folderDetails: folder,
      };
    } catch (error) {
      console.error('Error:', error.message);
      throw new Error('Error creating folder: ' + error.message);
    }
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

  async displayUserFolder(userId: string) {
    const userFolder = await this.folderService.userFolder(userId);

    return {
      success: true,
      message: 'The folder has been displayed as per classes',
      folder: userFolder,
    };
  }

  async displayFolderFiles(folderId: string) {
    const files = await this.folderService.getFolderFiles(folderId);

    return {
      success: true,
      message: 'Folder files retireved seccessfully',
      file: files,
    };
  }
}
