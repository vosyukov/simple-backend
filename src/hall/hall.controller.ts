import {Body, Controller, Post} from "@nestjs/common";
import {AddHallDto} from "./dto/add-hall.dto";
import {HallService} from "./services/hall.service";

@Controller('hall')
export class HallController {
    constructor(private readonly hallService: HallService) {
    }
    @Post('addHall')
    public async addHall(@Body() dto: AddHallDto): Promise<string>{
        const {name, photoIds, description} = dto
        const hall = await this.hallService.addHall({name, photoIds, description})
        return hall.id
    }
}