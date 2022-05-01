import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { HallEntity } from "../../hall/entities/hall.entity";
import { CityEntity } from "../../city/entities/city.entity";

const TABLE_NAME = "studios";

@Index("index_studios_sourceLink", ["sourceLink"])
@Entity(TABLE_NAME)
export class StudioEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => CityEntity, { nullable: true })
  city?: CityEntity;

  @Column({ nullable: true })
  sourceLink?: string;

  @OneToMany(() => HallEntity, (v) => v.studio, { nullable: true })
  halls?: HallEntity[];
}
