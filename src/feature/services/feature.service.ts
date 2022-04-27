import {Injectable} from "@nestjs/common";
import {FeatureRepository} from "../repositories/feature.repository";
import {FeatureEntity} from "../entities/feature.entity";
import {In} from "typeorm";

@Injectable()
export class FeatureService {
    constructor(private readonly featureRepository: FeatureRepository) {}

    public async create(features: string[]): Promise<FeatureEntity[]> {
        await this.featureRepository
            .createQueryBuilder()
            .insert()
            .into(FeatureEntity)
            .values(features.map(i => ({title: i})))
            .orIgnore()
            .execute();



        return this.featureRepository.find({title: In(features)})
    }
}