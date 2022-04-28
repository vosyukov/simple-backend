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
    return this.studioRepository.save({ name, sourceLink });
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
