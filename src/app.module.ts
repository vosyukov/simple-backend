import { Module } from '@nestjs/common';

import {TypeOrmModule} from "@nestjs/typeorm";
import {HallModule} from "./hall/hall.module";
import {FileStorageModule} from "./file-storage/file-storage.module";
import {StudioModule} from "./studio/studio.module";

@Module({
  imports: [TypeOrmModule.forRoot(), HallModule, FileStorageModule, StudioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
