import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { LanguageDto } from 'types/global';
import { SegmentInterfaces } from '../interface/segment-group.interface';

export class SegmentCreateDto implements SegmentInterfaces.Request {
  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  name: LanguageDto;
}
