import { IsString, IsNotEmpty, IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { LanguageRequestEnum } from '../constants';
import { LanguageRequestType } from '../types';

export class LanguageRequestDto {
  @IsString()
  @IsOptional()
  @IsEnum(LanguageRequestEnum)
  lang_code?: LanguageRequestType;

  @IsBoolean()
  @IsOptional()
  all_lang? = false;
}
