import {IsDefined, IsOptional, IsString, IsUUID} from "class-validator";

export class AddHallRequestDto {
    @IsDefined()
    @IsUUID('4')
    studioId: string;

    @IsDefined()
    @IsString()
    name: string;


    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    sourceLink?: string

    @IsDefined()
    @IsUUID('4', {each: true})
    photoIds: string[]
}
