import { EntityRepository, Repository } from "typeorm";

import { StudioEntity } from "../entities/studio.entity";

@EntityRepository(StudioEntity)
export class StudioRepository extends Repository<StudioEntity> {}
