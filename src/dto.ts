import {IsDefined, IsInt, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";


export class CreateCatDto {
    @ApiProperty()
    @IsDefined()
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}