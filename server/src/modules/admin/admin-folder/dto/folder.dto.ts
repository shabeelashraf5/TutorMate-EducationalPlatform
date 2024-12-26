import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FolderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsOptional()
  files?: string[];
}
