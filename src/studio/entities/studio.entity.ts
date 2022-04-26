import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HallEntity} from "../../hall/entities/hall.entity";

const TABLE_NAME = 'studios'

@Entity(TABLE_NAME)
export class StudioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() =>  HallEntity, v => v.studio, {nullable: true})
    halls?: HallEntity[]
}
