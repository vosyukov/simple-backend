import {Body, Controller, Post} from "@nestjs/common";
import {AddHallRequestDto} from "./dto/add-hall.request.dto";
import {HallService} from "./services/hall.service";
import {ApiTags} from "@nestjs/swagger";
import {AddStudioResponseDto} from "../studio/dto/add-studio.response.dto";
import {GetStudiosPaginatedRequestDto} from "../studio/dto/get-studios-paginated.request.dto";
import {GetStudiosPaginatedResponseDto} from "../studio/dto/get-studios-paginated.response.dto";
import {GetHallsPaginatedRequestDto} from "./dto/get-halls-paginated.request.dto";
import {GetHallsPaginatedResponseDto} from "./dto/get-halls-paginated.response.dto";

@ApiTags('hall')
@Controller('hall')
export class HallController {
    constructor(private readonly hallService: HallService) {}
    @Post('addHall')
    public async addHall(@Body() dto: AddHallRequestDto): Promise<AddStudioResponseDto>{
        const {name, photoIds, description, studioId, sourceLink, area, ceilingHeight} = dto
        const {id} = await this.hallService.addHall({name, photoIds, description, studioId, sourceLink, area, ceilingHeight})
        return {id}
    }

    @Post('getStudiosPaginated')
    public async getallsPaginated(@Body() dto: GetHallsPaginatedRequestDto): Promise<GetHallsPaginatedResponseDto>{
        return this.hallService.getHallsPaginated(dto.offset, dto.limit)
    }
}