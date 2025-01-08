import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';
import { SegmentInterfaces } from '../interface/segment-group.interface';
import { ApiProperty } from '@nestjs/swagger';

export class SegmentUpdateDto
  extends IdDto
  implements SegmentInterfaces.Request
{
  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  @ValidateNested()
  @Type(() => String)
  name: string;
}
