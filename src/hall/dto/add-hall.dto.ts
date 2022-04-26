import {IsDefined, IsString, IsUUID} from "class-validator";

export class AddHallDto {
    @IsDefined()
    @IsUUID('4')
    studioId: string;

    @IsDefined()
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsDefined()
    @IsUUID('4', {each: true})
    photoIds: string[]
}
