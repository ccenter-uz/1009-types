import { SubCategoryInterfaces } from 'types/organization/sub-category';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryUpdateDto
  extends IdDto
  implements SubCategoryInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  categoryId?: number;

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
}
