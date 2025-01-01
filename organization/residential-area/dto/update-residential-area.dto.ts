import { ResidentialAreaInterfaces } from "types/organization/residential-area"
import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
} from "class-validator"
import { IdDto, LanguageDto } from "types/global"

export class ResidentialAreaUpdateDto
  extends IdDto
  implements ResidentialAreaInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  regionId?: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  cityId?: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  index?: number

  @IsOptional()
  @IsString()
  staffNumber?: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  districtId?: number

  @ApiProperty({
    example: { ru: "swagger-ru", uz: "swagger-uz", cy: "swagger-cy" },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name?: LanguageDto

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
