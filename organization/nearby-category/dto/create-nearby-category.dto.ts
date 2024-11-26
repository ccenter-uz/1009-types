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
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';

export class NearbyCategoryCreateDto
  implements NearbyCategoryInterfaces.Request
{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  staffNumber: number;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
