import {Injectable} from "@nestjs/common";
import {HallEntity} from "../entities/hall.entity";
import {HallRepository} from "../repositories/hall.repository";
import {FileEntity} from "../../file-storage/entities/file.entity";

export interface AddHallOptions {
    name: string;
    description: string
    photoIds: string[]
}

@Injectable()
export class HallService {
    constructor(private readonly hallRepository: HallRepository) {
    }

    public async addHall(options: AddHallOptions):Promise<HallEntity> {
        const {name, photoIds, description} = options
        const photos = photoIds.map(i => {
            const p = new FileEntity()
            p.id = i
            return p
        })

        return await this.hallRepository.save({name, photos })
    }
}