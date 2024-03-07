import { Cart } from 'src/cart/entities/cart.entity';
import { Categori } from 'src/categori/entities/categori.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    product_id : number
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    image: string;
    @Column()
    title: string;
    @Column()
    stock: number;
    @ManyToOne(() => Categori , category => category.products)
    @JoinColumn({name:"cate_id"})
    cate_id:Categori

   @OneToMany(()=>Cart  , cart => cart.product )
   carts : Cart

    

}
