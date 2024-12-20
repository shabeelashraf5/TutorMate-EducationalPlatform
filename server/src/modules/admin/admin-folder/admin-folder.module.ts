import { forwardRef, Module } from '@nestjs/common';
import { AdminFolderController } from './admin-folder.controller';
import { AdminFolderService } from './provider/admin-folder/admin-folder.service';
import { FolderModule } from 'src/modules/folder/folder.module';

@Module({
  controllers: [AdminFolderController],
  providers: [AdminFolderService],
  exports: [AdminFolderService],
  imports: [forwardRef(() => FolderModule)],
})
export class AdminFolderModule {}
