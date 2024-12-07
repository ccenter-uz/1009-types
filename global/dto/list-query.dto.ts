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
import { ApiProperty } from '@nestjs/swagger';

export class ListQueryDto extends LanguageRequestDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  page = 1;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @Min(1)
  @IsOptional()
  @Type(() => Number)
  limit = 25;

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
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  all?: boolean = true;

  
}
