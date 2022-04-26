import {Module} from "@nestjs/common";
import {HallController} from "./hall.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HallService} from "./services/hall.service";
import {HallRepository} from "./repositories/hall.repository";

@Module({
    imports: [TypeOrmModule.forFeature([HallRepository])],
    providers: [HallService],
    controllers: [HallController]
})
export class HallModule {}