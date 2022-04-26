import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

const TABLE_NAME = 'studios'

@Entity(TABLE_NAME)
export class StudioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}
