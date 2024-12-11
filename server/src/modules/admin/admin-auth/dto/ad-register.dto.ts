import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AdminRegisterDto {
  @IsString()
  @IsNotEmpty()
  fname: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
