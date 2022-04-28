import { IsBase64, IsDefined, IsString } from "class-validator";

export class UploadFileRequestDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsBase64()
  data: string;
}
