import {IsDefined, IsString} from "class-validator";

export class CreateRequestDto {
    @IsDefined()
    @IsString({each: true})
    features: string[]
}