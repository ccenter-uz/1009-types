import { SubCategoryInterfaces } from 'types/organization/sub-category';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  category_id?: number;
}
