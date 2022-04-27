import {Injectable} from "@nestjs/common";
import {HallEntity} from "../entities/hall.entity";
import {HallRepository} from "../repositories/hall.repository";
import {FileEntity} from "../../file-storage/entities/file.entity";
import {StudioEntity} from "../../studio/entities/studio.entity";

export interface AddHallOptions {
    name: string;
    description?: string
    sourceLink?: string
    area?: number
    ceilingHeight?: number
    studioId: string
    photoIds: string[]
}

@Injectable()
export class HallService {
    constructor(private readonly hallRepository: HallRepository) {
    }

    public async addHall(options: AddHallOptions):Promise<HallEntity> {
        const {name, photoIds, description, studioId, sourceLink, area, ceilingHeight} = options
        const photos = photoIds.map(i => {
            const p = new FileEntity()
            p.id = i
            return p
        })

        const studio = new StudioEntity()
        studio.id = studioId

        return await this.hallRepository.save({name, photos, description, studio, sourceLink, area, ceilingHeight})
    }

    public async getHallsPaginated(offset: number, limit: number): Promise<{items: HallEntity[], total: number}> {
        const [items, total ]= await this.hallRepository.findAndCount({skip: offset, take: limit, relations: ['photos']})
        return {items, total}
    }
}