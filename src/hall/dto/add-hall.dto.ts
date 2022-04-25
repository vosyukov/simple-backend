import {IsDefined, IsString} from "class-validator";

export class AddHallDto {
    @IsDefined()
    @IsString()
    name: string;

    photoIds: string[]
}