import {IsString} from "class-validator";

export class AddStudioDto {
    @IsString()
    name: string
}