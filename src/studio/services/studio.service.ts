import {Injectable} from "@nestjs/common";
import {StudioEntity} from "../entities/studio.entity";
import {StudioRepository} from "../repositories/studio.repository";

export interface AddStudioOptions {
    name: string
}

@Injectable()
export class StudioService {
    constructor(private readonly studioRepository:StudioRepository){}

    public async addStudio(options: AddStudioOptions):Promise<StudioEntity> {
        const {name} = options
        return this.studioRepository.save({name})
    }
}