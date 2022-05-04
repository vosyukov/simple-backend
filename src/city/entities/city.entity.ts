import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { HallEntity } from "../../hall/entities/hall.entity";

const TABLE_NAME = "cities";

@Entity(TABLE_NAME)
export class CityEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => HallEntity, (v) => v.city, { nullable: true })
  halls: HallEntity[];
}
