import {Controller, Post} from "@nestjs/common";
import {AddHallDto} from "./dto/add-hall.dto";

@Controller('hall')
export class HallController {
    @Post()
    public addHall(dto: AddHallDto){}
}