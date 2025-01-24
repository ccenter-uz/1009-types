import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { SegmentInterfaces } from '../interface/segment-group.interface';

export class SegmentCreateDto implements SegmentInterfaces.Request {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  name: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
