import {IsOptional, IsString} from "class-validator";

export class AddStudioRequestDto {
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    sourceLink?: string
}