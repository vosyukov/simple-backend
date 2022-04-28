import { Injectable } from "@nestjs/common";
import { StudioEntity } from "../entities/studio.entity";
import { StudioRepository } from "../repositories/studio.repository";

export interface AddStudioOptions {
  name: string;
  sourceLink?: string;
}

@Injectable()
export class StudioService {
  constructor(private readonly studioRepository: StudioRepository) {}

  public async addStudio(options: AddStudioOptions): Promise<StudioEntity> {
    const { name, sourceLink } = options;
    const obj = { name, sourceLink };
    const studio = await this.studioRepository.findOne({
      sourceLink,
    });

    if (studio) {
      await this.studioRepository.update({ id: studio.id }, obj);
      return this.studioRepository.findOneOrFail(studio.id);
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
