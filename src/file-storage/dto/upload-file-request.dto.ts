import {IsDefined, IsString} from "class-validator";
import {Transform, Type} from "class-transformer";

export class UploadFileRequestDto {
    @IsDefined()
    @IsString()
    name: string;

    @IsDefined()
    @Type(() => String)
    @Transform(({value}) => Buffer.from(value, 'base64'))
    data: Buffer
}