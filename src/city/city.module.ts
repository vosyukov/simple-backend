import { CityController } from "./city.controller";
import { Module } from "@nestjs/common";
import { CityService } from "./services/city.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CityRepository } from "./repositories/city.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CityRepository])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
