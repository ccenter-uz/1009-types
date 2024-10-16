import { IsString, IsNotEmpty } from 'class-validator';

export class LanguageDto {
  @IsString()
  @IsNotEmpty()
  uz: string;

  @IsString()
  @IsNotEmpty()
  ru: string;

  @IsString()
  @IsNotEmpty()
  en: string;
}