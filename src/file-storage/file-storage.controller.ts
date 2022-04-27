import {Body, Controller, Post} from "@nestjs/common";
import {FileStorageService} from "./services/file-storage.service";
import {UploadFileRequestDto} from "./dto/upload-file-request.dto";
import {UploadFileResponseDto} from "./dto/upload-file-response.dto";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('file-storage')
@Controller('file-storage')
export class FileStorageController {
    constructor(private readonly fileStorageService:FileStorageService) {
    }


    @Post('uploadFile')
    @ApiOperation({ summary: 'Загрузить файл', description: "Загружает файл на сервер для последующего использования"})
    public async uploadFile(@Body() dto: UploadFileRequestDto): Promise<UploadFileResponseDto>{
        const  {name, data} = dto
        const file = await this.fileStorageService.uploadFile(name, Buffer.from(data, 'base64'))
        return {id: file.id}
    }
}