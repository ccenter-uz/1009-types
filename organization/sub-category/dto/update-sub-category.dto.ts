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
  
  export class SubCategoryUpdateDto extends IdDto {

    @IsOptional()
    @IsNumber()
    categoryId?: number;

    @IsOptional()
    @IsNumber()
    staffNumber?: number;
  
    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => LanguageDto)
    name?: Object;
  }
  