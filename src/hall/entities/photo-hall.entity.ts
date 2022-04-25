import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {HallEntity} from "./hall.entity";

@Entity()
export class PhotoHallEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string

    @ManyToOne(() => PhotoHallEntity)
    hall: HallEntity
}