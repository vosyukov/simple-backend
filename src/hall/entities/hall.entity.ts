// import {Entity, PrimaryGeneratedColumn} from "typeorm";

import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PhotoHallEntity} from "./photo-hall.entity";

const TABLE_NAME ='halls'
@Entity(TABLE_NAME)
export class HallEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() =>  PhotoHallEntity, (ph => ph.hall))
    photos: PhotoHallEntity[]


}