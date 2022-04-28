import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { HallEntity } from "../../hall/entities/hall.entity";

const TABLE_NAME = "studios";

@Index("sourceLink")
@Entity(TABLE_NAME)
export class StudioEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  sourceLink?: string;

  @OneToMany(() => HallEntity, (v) => v.studio, { nullable: true })
  halls?: HallEntity[];
}
