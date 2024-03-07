import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Cart {
    @PrimaryGeneratedColumn() 
    cart_id : number
    @Column()
    quantity : number
    @ManyToOne(() => Product , Product=>Product.carts)
    @JoinColumn({name:"product_id"})
    product:Product;

    @ManyToOne(() => User , User=>User.carts)
    @JoinColumn({name:"user_id"})
    user:User;
}
