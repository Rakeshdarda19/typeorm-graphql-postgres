import { BaseEntity , Entity, Column, PrimaryGeneratedColumn} from "typeorm"


@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: String

    @Column()
    username!: String

    @Column()
    password!: String
}