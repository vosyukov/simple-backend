import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {HallEntity} from "../../hall/entities/hall.entity";
const TABLE_NAME = 'files'
@Entity(TABLE_NAME)
export class FileEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    path: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(()=>HallEntity, {nullable: true})
    hall: HallEntity
}