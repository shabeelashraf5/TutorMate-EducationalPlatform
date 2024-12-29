import { IsNotEmpty, IsString } from 'class-validator';

export class FileDetailDto {
  @IsString()
  @IsNotEmpty()
  path: string;

  @IsString()
  @IsNotEmpty()
  originalName: string;
}
