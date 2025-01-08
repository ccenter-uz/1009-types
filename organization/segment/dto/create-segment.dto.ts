import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto } from 'types/global';
import { SegmentInterfaces } from '../interface/segment-group.interface';

export class SegmentCreateDto implements SegmentInterfaces.Request {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @ValidateNested()
  @Type(() => String)
  name: string;
}
