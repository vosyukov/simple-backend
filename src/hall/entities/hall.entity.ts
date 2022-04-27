
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {FileEntity} from "../../file-storage/entities/file.entity";
import {StudioEntity} from "../../studio/entities/studio.entity";


const TABLE_NAME ='halls'
@Entity(TABLE_NAME)
export class HallEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => StudioEntity)
    studio: StudioEntity

    @Column()
    name: string;

    @Column({nullable: true})
    description?: string;

    @Column({nullable: true})
    sourceLink?: string

    @Column({nullable: true})
    area?: number

    @OneToMany(() =>  FileEntity, v => v.hall, {nullable: true})
    photos: FileEntity[]


}