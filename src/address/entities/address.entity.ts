// import { Address } from 'src/address/entities/address.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    address_id : number
    @Column()
    street : string
    @Column()
    city : string
   @OneToOne(() => User, (user)=> user.address)
   
   user : User
}
