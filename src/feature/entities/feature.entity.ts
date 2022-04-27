import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

const TABLE_NAME = 'features';

@Entity(TABLE_NAME)
export class FeatureEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    title: string

    @Column({nullable: true})
    description: string
}