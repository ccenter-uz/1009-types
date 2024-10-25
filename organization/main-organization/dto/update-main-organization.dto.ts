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
import { IdDto, LanguageDto } from 'types/global';

export class MainOrganizationUpdateDto extends IdDto {
  @IsOptional()
  @IsNumber()
  staffNumber?: number;

  @IsOptional()
  @IsString()
  name: string;
}
