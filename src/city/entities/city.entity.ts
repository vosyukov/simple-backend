import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { FileEntity } from "../../file-storage/entities/file.entity";
import { StudioEntity } from "../../studio/entities/studio.entity";
import { FeatureEntity } from "../../feature/entities/feature.entity";
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
