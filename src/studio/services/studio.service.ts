import { Injectable } from "@nestjs/common";
import { StudioEntity } from "../entities/studio.entity";
import { StudioRepository } from "../repositories/studio.repository";
import { CityEntity } from "../../city/entities/city.entity";

export interface AddStudioOptions {
  name: string;
  cityId?: string;
  sourceLink?: string;
}

@Injectable()
export class StudioService {
  constructor(private readonly studioRepository: StudioRepository) {}

  public async addStudio(options: AddStudioOptions): Promise<StudioEntity> {
    const { name, sourceLink, cityId } = options;

    const city = new CityEntity();
    city.id = cityId;

    const obj = { name, sourceLink, city };
    const studio = await this.studioRepository.findOne({
      sourceLink,
    });

    if (studio) {
      return await this.studioRepository.save({ id: studio.id, ...obj });
    }

    return await this.studioRepository.save(obj);
  }

  public async getStudiosPaginated(
    offset: number,
    limit: number
  ): Promise<{ items: StudioEntity[]; total: number }> {
    const [items, total] = await this.studioRepository.findAndCount({
      skip: offset,
      take: limit,
    });
    return { items, total };
  }
}
