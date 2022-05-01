import { IsOptional, IsString, IsUUID } from "class-validator";

export class AddStudioRequestDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  sourceLink?: string;

  @IsOptional()
  @IsUUID()
  cityId?: string;
}
