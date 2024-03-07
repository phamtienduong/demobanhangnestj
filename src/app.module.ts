import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AddressModule } from './address/address.module';
import { Address } from './address/entities/address.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { CategoriModule } from './categori/categori.module';
import { Categori } from './categori/entities/categori.entity';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/entities/cart.entity';

@Module({
  imports:  [
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:"",
      database:"test-project",
      entities:[User,Address,Product,Categori,Cart],
      synchronize:true
    }),
    UsersModule,
    AddressModule,
    ProductsModule,
    CategoriModule,
    CartModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
