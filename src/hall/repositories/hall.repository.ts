import {EntityRepository, Repository} from "typeorm";
import {HallEntity} from "../entities/hall.entity";

@EntityRepository(HallEntity)
export class HallRepository extends Repository<HallEntity> {}