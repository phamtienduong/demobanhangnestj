import { Injectable } from '@nestjs/common';
import { CreateCategoriDto } from './dto/create-categori.dto';
import { UpdateCategoriDto } from './dto/update-categori.dto';

@Injectable()
export class CategoriService {
  create(createCategoriDto: CreateCategoriDto) {
    return 'This action adds a new categori';
  }

  findAll() {
    return `This action returns all categori`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categori`;
  }

  update(id: number, updateCategoriDto: UpdateCategoriDto) {
    return `This action updates a #${id} categori`;
  }

  remove(id: number) {
    return `This action removes a #${id} categori`;
  }
}
