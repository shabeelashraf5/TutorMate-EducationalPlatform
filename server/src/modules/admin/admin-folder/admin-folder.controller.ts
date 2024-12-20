import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminFolderService } from './provider/admin-folder/admin-folder.service';
import { FolderDto } from './dto/folder.dto';

@Controller('api/admin')
export class AdminFolderController {
  constructor(private readonly adminFolder: AdminFolderService) {}

  @Post('documents')
  public createFolder(@Body() folderDto: FolderDto) {
    const response = this.adminFolder.createFolder(folderDto);
    console.log('Request body:', response);
    return response;
  }

  @Get('documents')
  async displayFolder(folderDto: FolderDto) {
    const response = this.adminFolder.displayFolder(folderDto);
    return response;
  }
}
