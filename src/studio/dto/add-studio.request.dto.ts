import { IsDefined, IsOptional, IsString, IsUUID } from "class-validator";

export class AddStudioRequestDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sourceLink?: string;

  @IsDefined()
  @IsUUID()
  cityId?: string;
}
