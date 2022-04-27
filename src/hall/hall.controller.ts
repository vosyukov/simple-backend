import {Body, Controller, Post} from "@nestjs/common";
import {AddHallRequestDto} from "./dto/add-hall.request.dto";
import {HallService} from "./services/hall.service";
import {ApiTags} from "@nestjs/swagger";
import {AddStudioResponseDto} from "../studio/dto/add-studio.response.dto";

@ApiTags('hall')
@Controller('hall')
export class HallController {
    constructor(private readonly hallService: HallService) {
    }
    @Post('addHall')
    public async addHall(@Body() dto: AddHallRequestDto): Promise<AddStudioResponseDto>{
        const {name, photoIds, description, studioId, sourceLink} = dto
        const {id} = await this.hallService.addHall({name, photoIds, description, studioId, sourceLink})
        return {id}
    }
}