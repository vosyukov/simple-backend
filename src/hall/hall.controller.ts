import {Body, Controller, Post} from "@nestjs/common";
import {AddHallRequestDto} from "./dto/add-hall.request.dto";
import {HallService} from "./services/hall.service";
import {ApiTags} from "@nestjs/swagger";
import {AddStudioResponseDto} from "../studio/dto/add-studio.response.dto";
import {GetHallsPaginatedRequestDto} from "./dto/get-halls-paginated.request.dto";
import {GetHallsPaginatedResponseDto} from "./dto/get-halls-paginated.response.dto";
import {BUCKET_NAME, DIR} from "../file-storage/services/file-storage.service";

@ApiTags('hall')
@Controller('hall')
export class HallController {
    constructor(private readonly hallService: HallService) {}

    @Post('addHall')
    public async addHall(@Body() dto: AddHallRequestDto): Promise<AddStudioResponseDto>{
        const {name, photoIds, description, studioId, sourceLink, area, ceilingHeight, price, featureIds} = dto
        const {id} = await this.hallService.addHall({name, photoIds, description, studioId, sourceLink, area, ceilingHeight, price, featureIds})
        return {id}
    }

    @Post('getHallPaginated')
    public async getHallPaginated(@Body() dto: GetHallsPaginatedRequestDto): Promise<GetHallsPaginatedResponseDto>{
        const data =  await this.hallService.getHallsPaginated(dto.offset, dto.limit)

        return {
            items: data.items.map(item => ({
                id: item.id,
                studioId:item.studio.id,
                description: item.description,
                name: item.name,
                features: item.features.map(i => i.title),
                area: item.area,
                ceilingHeight: item.ceilingHeight,
                price: item.price,
                photos: item.photos.map(i => `https://6916b2be-dfd4-42ea-bd97-9f244a93d797.selcdn.net/${BUCKET_NAME}/${DIR}/${i.path}`)
            })),
            total: data.total
        }
    }
}