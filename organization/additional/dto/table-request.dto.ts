import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class AdditionalTableOrContentRequestDto extends IdDto {
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  content: LanguageDto;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  additionalId?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
  
}
