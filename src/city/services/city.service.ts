import { Injectable } from "@nestjs/common";
import { CityRepository } from "../repositories/city.repository";
import { CityEntity } from "../entities/city.entity";

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  public async addCity(name: string): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({ name });

    if (city) {
      return city;
    }

    return await this.cityRepository.save({ name });
  }
}
