import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { LanguageRequestEnum } from '../constants';
import { LanguageRequestType } from '../types';

export class LanguageRequestDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(LanguageRequestEnum)
  lang_code: LanguageRequestType;
}
