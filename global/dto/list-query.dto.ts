import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageRequestDto } from './language-request.dto';

export class ListQueryDto extends LanguageRequestDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page = 1;

  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit = 25;

  @IsString()
  @IsOptional()
  search?: string;

  @IsDateString()
  @IsOptional()
  date_from?: Date | string;

  @IsDateString()
  @IsOptional()
  date_to?: Date | string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  all?: boolean = false;


  @IsNumber({}, { each: true })
  @Type(() => Number)
  @IsArray()
  @IsOptional()
  include?: number[];

  @IsNumber({}, { each: true })
  @Type(() => Number)
  @IsArray()
  @IsOptional()
  exclude?: number[];
}
