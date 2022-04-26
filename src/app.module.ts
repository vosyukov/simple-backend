import { Module } from '@nestjs/common';

import {TypeOrmModule} from "@nestjs/typeorm";
import {HallModule} from "./hall/hall.module";
import {FileStorageModule} from "./file-storage/file-storage.module";

@Module({
  imports: [TypeOrmModule.forRoot(), HallModule, FileStorageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
