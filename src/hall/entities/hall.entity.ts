
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {FileEntity} from "../../file-storage/entities/file.entity";
import {StudioEntity} from "../../studio/entities/studio.entity";
import {FeatureEntity} from "../../feature/entities/feature.entity";


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

    @Column({nullable: true})
    ceilingHeight?: number

    @Column({nullable: true})
    price?: number

    @ManyToMany(() => FeatureEntity, {nullable: true})
    @JoinTable()
    features?: FeatureEntity[]

    @OneToMany(() =>  FileEntity, v => v.hall, {nullable: true})
    photos?: FileEntity[]


}