import { Module } from '@nestjs/common';
import { CategoriService } from './categori.service';
import { CategoriController } from './categori.controller';
import { Categori } from './entities/categori.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categori])],

  controllers: [CategoriController],
  providers: [CategoriService],
})
export class CategoriModule {}
