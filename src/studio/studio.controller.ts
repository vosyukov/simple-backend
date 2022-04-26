import {Body, Controller, Post} from "@nestjs/common";
import {StudioService} from "./services/studio.service";
import {AddStudioDto} from "./dto/add-studio.dto";

@Controller('studio')
export class StudioController {
    constructor(private readonly studioService:StudioService) {}

    @Post('addStudio')
    public async addStudio(@Body() dto: AddStudioDto): Promise<string> {
        const {name} = dto
        const studio = await this.studioService.addStudio({name})
        return studio.id
    }
}