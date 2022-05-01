import { IsDefined, IsString } from "class-validator";

export class AddCityRequestDto {
  @IsDefined()
  @IsString()
  name: string;
}
