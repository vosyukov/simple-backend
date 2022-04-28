import { Injectable } from "@nestjs/common";
import { FileEntity } from "../entities/file.entity";
import { FileRepository } from "../repositories/file.repository";
import { createHash } from "crypto";
const { env } = process;

const manager = require("node-selectel-manager")({
  login: env.FS_LOGIN,
  password: env.FS_PASSWORD,
});

export const BUCKET_NAME = "simple";
export const DIR = "hall-photos";

@Injectable()
export class FileStorageService {
  constructor(private readonly fileRepository: FileRepository) {}

  public async uploadFile(name: string, data: Buffer): Promise<FileEntity> {
    const hash = createHash("sha256").update(data).digest("hex");

    const file = await this.fileRepository.findOne({ hash });

    if (file) {
      return file;
    }

    await manager.uploadFile(
      Uint8Array.from(data),
      `${BUCKET_NAME}/${DIR}/${hash}/${name}`
    );
    return this.fileRepository.save({ name, hash, path: `${hash}/${name}` });
  }
}
