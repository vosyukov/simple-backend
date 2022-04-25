import {Body, Controller, Post} from "@nestjs/common";
import {FileStorageService} from "./services/file-storage.service";
import {UploadFileRequestDto} from "./dto/upload-file-request.dto";
import {UploadFileResponseDto} from "./dto/upload-file-response.dto";

@Controller('file-storage')
export class FileStorageController {
    constructor(private readonly fileStorageService:FileStorageService) {
    }

    @Post('uploadFile')
    public async uploadFile(@Body() dto: UploadFileRequestDto): Promise<UploadFileResponseDto>{
        const  {name, data} = dto
        const file = await this.fileStorageService.uploadFile(name, data)
        return {id: file.id}
    }
}