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
import { ApiProperty } from '@nestjs/swagger';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';

export class NearbyCategoryUpdateDto
  extends IdDto
  implements NearbyCategoryInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsOptional()
  @IsString()
  name: string;
}
