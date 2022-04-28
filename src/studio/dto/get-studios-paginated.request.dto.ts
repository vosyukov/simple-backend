import { IsNumber } from "class-validator";

export class GetStudiosPaginatedRequestDto {
  @IsNumber()
  offset: number;

  @IsNumber()
  limit: number;
}
