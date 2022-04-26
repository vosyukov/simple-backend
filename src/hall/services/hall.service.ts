import {Injectable} from "@nestjs/common";
import {HallEntity} from "../entities/hall.entity";
import {HallRepository} from "../repositories/hall.repository";
import {FileEntity} from "../../file-storage/entities/file.entity";
import {StudioEntity} from "../../studio/entities/studio.entity";

export interface AddHallOptions {
    name: string;
    description: string
    studioId: string
    photoIds: string[]
}

@Injectable()
export class HallService {
    constructor(private readonly hallRepository: HallRepository) {
    }

    public async addHall(options: AddHallOptions):Promise<HallEntity> {
        const {name, photoIds, description, studioId} = options
        const photos = photoIds.map(i => {
            const p = new FileEntity()
            p.id = i
            return p
        })

        const studio = new StudioEntity()
        studio.id = studioId

        return await this.hallRepository.save({name, photos, description, studio })
    }
}