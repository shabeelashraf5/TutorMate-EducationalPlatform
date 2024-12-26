import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AdminFolderService } from './provider/admin-folder/admin-folder.service';
import { FolderDto } from './dto/folder.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageUploadOptions } from 'src/config/file-upload.config';

@Controller('api')
export class AdminFolderController {
  constructor(private readonly adminFolder: AdminFolderService) {}

  @Post('admin/documents')
  @UseInterceptors(FilesInterceptor('files', 10, imageUploadOptions))
  public createFolder(
    @Body() folderDto: FolderDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const response = this.adminFolder.createFolder(folderDto, files);
    console.log('Request body:', response);
    return response;
  }

  @Get('admin/documents')
  async displayFolder(folderDto: FolderDto) {
    const response = this.adminFolder.displayFolder(folderDto);
    return response;
  }

  //@UseGuards(JwtauthGuard)
  @Get('users/:id/material')
  async userDisplayFolder(@Param('id') id: string) {
    const response = await this.adminFolder.displayUserFolder(id);
    console.log(
      'Response to check if folder are displaying',
      JSON.stringify(response, null, 2),
    );
    return response;
  }
}
