import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Address } from 'src/address/entities/address.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository (User) private  userRepo: Repository<User>,
  @InjectRepository (Address) private  addressRepo : Repository <Address>) {}
  async create(createUserDto: any) {
    const  { password,userName,phone,email,role,active,address } = createUserDto;
    console.log(address,"111");
    const data = await  this.addressRepo.createQueryBuilder( "address" ).insert().into(Address).values(address).execute()
    const id = data.identifiers[0].address_id
    const newUser = this.userRepo.create({
      userName ,
      phone ,
      email ,
      role ,
      active ,
      password,
      address:id
    })
    const  createdUser = await this.userRepo.save(newUser);
    return createdUser
  }

  findAll() {
    const res = this.userRepo.createQueryBuilder("user").innerJoinAndSelect("user.address","address").getMany();
    return res;
  }

  findOne(id: number) {
    const res = this.userRepo.createQueryBuilder('user').select().where("user.userId= :id",{id}).getOne();
    return res;
  }

  update(id: number, body : any) {
    // console.log(body);
    const res = this.userRepo.createQueryBuilder('user').update(User).set({userName : body.userName}).where("user.userId= :id",{id}).execute();
    return res
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
