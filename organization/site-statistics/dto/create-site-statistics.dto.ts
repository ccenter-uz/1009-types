import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { siteStatisticsInterfaces } from '../interface/site-statistics-group.interface';

export class siteStatisticsCreateDto implements siteStatisticsInterfaces.Request {
  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  organizationId: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @ApiProperty({
    type: Array,
    required: false,
    example: [1, 2],
  })
  @IsOptional()
  @Type(() => Array)
  address?: Array<number>;

  @ApiProperty()
  @IsOptional()
  @IsString()
  addressCity: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  userLogId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  device: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sourceSite: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sessionTime: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
