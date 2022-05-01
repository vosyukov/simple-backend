import { Body, Controller } from "@nestjs/common";
import { CityService } from "./services/city.service";
import { AddCityRequestDto } from "./dto/add-city.request.dto";
import { AddCityResponseDto } from "./dto/add-city.response.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("city")
@Controller("city")
export class CityController {
  constructor(private readonly cityService: CityService) {}

  public async addCity(
    @Body() dto: AddCityRequestDto
  ): Promise<AddCityResponseDto> {
    const city = await this.cityService.addCity(dto.name);

    return { id: city.id };
  }
}
