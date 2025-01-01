import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator"
import { LanguageDto } from "types/global"
import { DistrictInterfaces } from "../interface/district-group.interface"

export class DistrictCreateDto implements DistrictInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  regionId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cityId: number

  @IsOptional()
  @IsString()
  staffNumber?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  index: number

  @ApiProperty({
    example: { ru: "swagger-ru", uz: "swagger-uz", cy: "swagger-cy" },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto

  @ApiProperty({
    example: {
      ru: "swagger-old-ru",
      uz: "swagger-old-uz",
      cy: "swagger-old-cy",
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  oldName?: LanguageDto

  @ApiProperty({
    example: {
      ru: "swagger-new-ru",
      uz: "swagger-new-uz",
      cy: "swagger-new-cy",
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  newName?: LanguageDto
}
