import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { FileEntity } from "../../file-storage/entities/file.entity";
import { StudioEntity } from "../../studio/entities/studio.entity";
import { FeatureEntity } from "../../feature/entities/feature.entity";
import { CityEntity } from "../../city/entities/city.entity";

const TABLE_NAME = "halls";

@Index("index_halls_sourceLink", ["sourceLink"])
@Entity(TABLE_NAME)
export class HallEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => StudioEntity)
  studio: StudioEntity;

  @Column()
  name: string;

  @OneToOne(() => CityEntity)
  @JoinColumn({ name: "cityId" })
  city?: CityEntity;

  @Column({ type: "uuid", nullable: true })
  cityId: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  sourceLink?: string;

  @Column({ nullable: true, type: "float" })
  area?: number;

  @Column({ nullable: true, type: "float" })
  ceilingHeight?: number;

  @Column({ nullable: true })
  price?: number;

  @Column({ nullable: true })
  address?: string;

  @ManyToMany(() => FeatureEntity, { nullable: true })
  @JoinTable()
  features?: FeatureEntity[];

  @OneToMany(() => FileEntity, (v) => v.hall, { nullable: true })
  photos?: FileEntity[];
}
