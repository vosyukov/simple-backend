import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {HallEntity} from "../../hall/entities/hall.entity";

@Entity()
export class FileEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(()=>HallEntity, {nullable: true})
    hall: HallEntity
}