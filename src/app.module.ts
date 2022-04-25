import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HallModule} from "./hall/hall.module";
import {FileStorageModule} from "./file-storage/file-storage.module";

@Module({
  imports: [TypeOrmModule.forRoot(), HallModule, FileStorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
