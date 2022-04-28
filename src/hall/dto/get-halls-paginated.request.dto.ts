import { IsNumber } from "class-validator";

export class GetHallsPaginatedRequestDto {
  @IsNumber()
  offset: number;

  @IsNumber()
  limit: number;
}
