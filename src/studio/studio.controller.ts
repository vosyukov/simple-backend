import {Body, Controller, Post} from "@nestjs/common";
import {StudioService} from "./services/studio.service";
import {AddStudioDto} from "./dto/add-studio.dto";
import {ApiTags} from "@nestjs/swagger";
import {GetStudiosPaginatedRequestDto} from "./dto/get-studios-paginated.request.dto";
import {GetStudiosPaginatedResponseDto} from "./dto/get-studios-paginated.response.dto";

@ApiTags('studio')
@Controller('studio')
export class StudioController {
    constructor(private readonly studioService:StudioService) {}

    @Post('addStudio')
    public async addStudio(@Body() dto: AddStudioDto): Promise<string> {
        const {name} = dto
        const studio = await this.studioService.addStudio({name})
        return studio.id
    }

    @Post('getStudiosPaginated')
    public async getStudiosPaginated(@Body() dto: GetStudiosPaginatedRequestDto): Promise<GetStudiosPaginatedResponseDto>{
        return this.studioService.getStudiosPaginated(dto.offset, dto.limit)
    }
}