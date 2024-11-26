import { SubCategoryInterfaces } from 'types/organization/sub-category';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LanguageRequestDto } from 'types/global';


export class SubCategoryCreateDto implements SubCategoryInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

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
