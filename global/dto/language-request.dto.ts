import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { LanguageRequestEnum } from '../constants';
import { LanguageRequestType } from '../types';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageRequestDto {
  @ApiProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  @IsEnum(LanguageRequestEnum)
  lang_code?: LanguageRequestType;

  @ApiProperty({ type: Boolean, required: false })
  @IsBoolean()
  @IsOptional()
  all_lang?: boolean;
}
