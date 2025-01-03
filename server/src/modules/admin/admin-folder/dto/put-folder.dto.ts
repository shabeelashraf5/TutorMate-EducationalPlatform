import { PartialType } from '@nestjs/mapped-types';
import { FolderDto } from './folder.dto';

export class PutFolderDto extends PartialType(FolderDto) {}
