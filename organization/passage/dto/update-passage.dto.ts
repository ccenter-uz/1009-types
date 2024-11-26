import { PassageInterfaces } from 'types/organization/passage';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { IdDto, LanguageDto } from 'types/global';

export class PassageUpdateDto  extends IdDto implements PassageInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  regionId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  cityId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  index?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  staffId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  districtId?: number;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name?: LanguageDto;

  @ApiProperty({
    example: {
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  old_name?: LanguageDto;

  @ApiProperty({
    example: {
      ru: 'swagger-new-ru',
      uz: 'swagger-new-uz',
      cy: 'swagger-new-cy',
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  new_name?: LanguageDto;
}