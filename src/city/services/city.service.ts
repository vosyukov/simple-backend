import { Injectable } from "@nestjs/common";
import { CityRepository } from "../repositories/city.repository";
import { CityEntity } from "../entities/city.entity";

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  public async addCity(name: string): Promise<CityEntity> {
    return this.cityRepository.save({ name });

    const city = await this.cityRepository.findOne({ name });

    if (city) {
      return this.cityRepository.save({ id: city.id, name });
    }

    return await this.cityRepository.save({ name });
  }
}
