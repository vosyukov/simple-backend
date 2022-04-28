import { Module } from "@nestjs/common";
import { FeatureController } from "./feature.controller";
import { FeatureService } from "./services/feature.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeatureRepository } from "./repositories/feature.repository";

@Module({
  imports: [TypeOrmModule.forFeature([FeatureRepository])],
  providers: [FeatureService],
  controllers: [FeatureController],
})
export class FeatureModule {}
