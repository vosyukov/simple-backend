import {Injectable} from "@nestjs/common";
import {FileEntity} from "../entities/file.entity";
import {FileRepository} from "../repositories/file.repository";
import {createHash} from "crypto";
const { env } = process;
console.log(env)
const manager = require('node-selectel-manager')({
    login: env.FS_LOGIN,
    password: env.FS_PASSWORD,
});

@Injectable()
export class FileStorageService {
    constructor(private readonly fileRepository:FileRepository){}

    public async uploadFile(name: string, data: Uint8Array): Promise<FileEntity> {
        console.log(name)
        const hash = createHash('sha256').update(Buffer.from(data)).digest('hex');
        console.log(hash)
        await manager.uploadFile(Uint8Array.from(data), `simple/hall-photos/${hash}/` + name)
        return this.fileRepository.save({name})
    }

}