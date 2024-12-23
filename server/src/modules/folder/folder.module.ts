import { Module } from '@nestjs/common';
import { FolderController } from './folder.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Folder, FolderSchema } from './schema/folder.schema';
import { FolderService } from './provider/folder/folder.service';
import { User, UserSchema } from '../users/schemas/user.schema';

@Module({
  controllers: [FolderController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Folder.name,
        schema: FolderSchema,
      },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [FolderService],
  exports: [FolderService],
})
export class FolderModule {}
