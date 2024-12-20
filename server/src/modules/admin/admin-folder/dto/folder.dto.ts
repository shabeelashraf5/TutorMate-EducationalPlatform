import { IsNotEmpty, IsString } from 'class-validator';

export class FolderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  class: string;
}
