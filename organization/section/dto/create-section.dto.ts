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
import { SectionInterfaces } from '../interface/section-group.interface';

export class SectionCreateDto implements SectionInterfaces.Request {
  @ApiProperty({
    example:'swager-name'
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
