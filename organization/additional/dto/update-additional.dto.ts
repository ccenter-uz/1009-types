import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { AdditionalInterfaces } from '../interface/additional-group.interface';
import { AdditionalTableOrContentDto } from './table.dto';
import { AdditionalTableOrContentUpdateDto } from './table-update.dto';

export class AdditionalUpdateDto
  extends IdDto
  implements AdditionalInterfaces.Update
{
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
  warning: LanguageDto;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  mention: LanguageDto;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  additionalCategoryId?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;

  @ApiProperty({ type: [AdditionalTableOrContentUpdateDto] }) // Указываем, что это массив
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdditionalTableOrContentUpdateDto)
  content: AdditionalTableOrContentUpdateDto[];

  @ApiProperty({ type: [AdditionalTableOrContentUpdateDto] }) // Указываем, что это массив
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdditionalTableOrContentUpdateDto)
  table: AdditionalTableOrContentUpdateDto[];
}
