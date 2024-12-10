import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { LanguageRequestDto } from './language-request.dto';
import { ApiProperty } from '@nestjs/swagger';
import { StatusEnum } from '../types';

export class ListQueryDto extends LanguageRequestDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit: number = 10;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  date_from?: Date | string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsDateString()
  @IsOptional()
  date_to?: Date | string;

  @ApiProperty({
    type: Boolean,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }
    return Boolean(value);
  })
  @IsBoolean()
  @IsOptional()
  all?: boolean = false;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return parseInt(value, 10); // Преобразуем строку в число (с основанием 10)
    }
    return value; // Если значение уже число, возвращаем его без изменений
  })
  @IsInt()
  @IsEnum(StatusEnum) // Указание enum для валидации
  @Min(0)
  @IsOptional()
  status: StatusEnum = StatusEnum.ALL; // Задаём дефолтное значение
}
