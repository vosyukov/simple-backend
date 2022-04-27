import {IsDefined, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";

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

    @IsOptional()
    @IsNumber()
    area?: number

    @IsOptional()
    @IsNumber()
    ceilingHeight?: number

    @IsOptional()
    @IsNumber()
    price?: number

    @IsDefined()
    @IsUUID('4', {each: true})
    photoIds: string[]
}
