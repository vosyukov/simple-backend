import { Body, Controller, Post } from "@nestjs/common";
import { StudioService } from "./services/studio.service";
import { AddStudioResponseDto } from "./dto/add-studio.response.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { GetStudiosPaginatedRequestDto } from "./dto/get-studios-paginated.request.dto";
import { GetStudiosPaginatedResponseDto } from "./dto/get-studios-paginated.response.dto";
import { AddStudioRequestDto } from "./dto/add-studio.request.dto";

@ApiTags("studio")
@Controller("studio")
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Post("addStudio")
  @ApiOperation({ summary: "Создать студию" })
  public async addStudio(
    @Body() dto: AddStudioRequestDto
  ): Promise<AddStudioResponseDto> {
    const { name, sourceLink } = dto;
    const { id } = await this.studioService.addStudio({ name, sourceLink });
    return { id };
  }

  @Post("getStudiosPaginated")
  @ApiOperation({ summary: "Получить список фотозалов с пагинацией" })
  public async getStudiosPaginated(
    @Body() dto: GetStudiosPaginatedRequestDto
  ): Promise<GetStudiosPaginatedResponseDto> {
    return this.studioService.getStudiosPaginated(dto.offset, dto.limit);
  }
}
