import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriDto } from './create-categori.dto';

export class UpdateCategoriDto extends PartialType(CreateCategoriDto) {}
