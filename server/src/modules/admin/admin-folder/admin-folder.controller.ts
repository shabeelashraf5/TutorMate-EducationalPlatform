import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AdminFolderService } from './provider/admin-folder/admin-folder.service';
import { FolderDto } from './dto/folder.dto';
import { JwtauthGuard } from 'src/modules/auth/guards/jwtauth/jwtauth.guard';

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

  @UseGuards(JwtauthGuard)
  @Get('users/material')
  async userDisplayFolder(@Req() req: any) {
    // console.log('Request user:', req.user);
    // const userClass = req.user?.class;
    // const response = this.adminFolder.displayUserFolder(userClass);
    // console.log('Response from userDisplayFolder', response);
    // return response;
    const userClass = req.user?.class;

    if (!userClass) {
      return {
        success: false,
        message: 'User class not found in request.',
        folder: [],
      };
    }

    const response = await this.adminFolder.displayUserFolder(userClass);
    return response;
  }
}
