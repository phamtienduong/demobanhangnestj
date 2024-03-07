import { Address } from 'src/address/entities/address.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column({ type: 'varchar', length: 20 })
  userName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column()
  role: string;
  @Column()
  active: string;
  @OneToOne(() => Address,(addr)=> addr.user)
  @JoinColumn({ name : "address_id"})
    address:Address

    @OneToMany(()=>Cart  , cart => cart.user )
    carts : Cart
}
