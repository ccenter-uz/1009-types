import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LanguageRequestDto } from 'types/global';
import { CategoryInterfaces } from '../interface/category-group.interface';

export class CategoryCreateDto implements CategoryInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  staffNumber: number;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;
}
