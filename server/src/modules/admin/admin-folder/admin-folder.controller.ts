import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdminFolderService } from './provider/admin-folder/admin-folder.service';
import { FolderDto } from './dto/folder.dto';

@Controller('api')
export class AdminFolderController {
  constructor(private readonly adminFolder: AdminFolderService) {}

  @Post('admin/documents')
  public createFolder(@Body() folderDto: FolderDto) {
    const response = this.adminFolder.createFolder(folderDto);
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
