import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './register.dto';

export class PutRegisterDto extends PartialType(RegisterDto) {}
