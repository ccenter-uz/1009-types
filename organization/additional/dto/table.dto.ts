import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';

export class AdditionalTableOrContentDto extends IdDto {
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  content: LanguageDto;

  @IsOptional()
  @IsNumber()
  additionalId?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
