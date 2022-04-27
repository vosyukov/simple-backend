import {Body, Controller, Post} from "@nestjs/common";
import {CreateRequestDto} from "./dto/create.request.dto";
import {FeatureService} from "./services/feature.service";
import {CreateResponseDto} from "./dto/create.response.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('feature')
@Controller('feature')
export class FeatureController {

    constructor(private readonly featureService: FeatureService) {}

    @Post('create')
    public async create(@Body() dto: CreateRequestDto): Promise<CreateResponseDto>{
        const {features} = dto
        const items = await  this.featureService.create(features)

        return {ids: items.map(i => i.id)}
    }
}