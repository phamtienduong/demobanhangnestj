import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Categori {
    @PrimaryGeneratedColumn()
    cate_id : number
    @Column()
    cate_name: string;
    @OneToMany(() => Product, product => product.cate_id) //
    products : Product


}
