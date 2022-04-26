
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {FileEntity} from "../../file-storage/entities/file.entity";


const TABLE_NAME ='halls'
@Entity(TABLE_NAME)
export class HallEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @OneToMany(() =>  FileEntity, v => v.hall, {nullable: true})
    photos: FileEntity[]


}