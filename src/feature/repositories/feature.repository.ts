import { EntityRepository, Repository } from "typeorm";
import { FeatureEntity } from "../entities/feature.entity";

@EntityRepository(FeatureEntity)
export class FeatureRepository extends Repository<FeatureEntity> {}
