import { Module } from "@nestjs/common";
import { FileStorageService } from "./services/file-storage.service";
import { FileStorageController } from "./file-storage.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileRepository } from "./repositories/file.repository";

@Module({
  imports: [TypeOrmModule.forFeature([FileRepository])],
  controllers: [FileStorageController],
  providers: [FileStorageService],
  exports: [FileStorageService],
})
export class FileStorageModule {}
