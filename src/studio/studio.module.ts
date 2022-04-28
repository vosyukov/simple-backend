import { Module } from "@nestjs/common";
import { StudioController } from "./studio.controller";
import { StudioService } from "./services/studio.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudioRepository } from "./repositories/studio.repository";

@Module({
  imports: [TypeOrmModule.forFeature([StudioRepository])],
  controllers: [StudioController],
  providers: [StudioService],
})
export class StudioModule {}
