import {
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageRequestDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class GetSiteStatisticsDto extends LanguageRequestDto {
  @ApiProperty({ type: String, required: false, example: '30 days' })
  @IsString()
  @IsOptional()
  dateRange?: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  id = 1;

  @IsOptional()
  filter?: any;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
