import {Module} from "@nestjs/common";
import {HallController} from "./hall.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HallEntity} from "./entities/hall.entity";

@Module({
    imports: [TypeOrmModule.forFeature([HallEntity])],
    controllers: [HallController]
})
export class HallModule {}