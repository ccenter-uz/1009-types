import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import {
  ListQueryDto,
  PermissionsEnum,
  moduleNames,
  moduleNamesObjectAdress,
} from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class ObjectAdressFilterDto extends ListQueryDto {
  @ApiProperty({
    type: String,
    required: false,
    enum: moduleNamesObjectAdress,
    example: moduleNamesObjectAdress.AREA,
    description:
      'Specifies which module this field belongs to. Must be one of the following values: ' +
      Object.values(moduleNamesObjectAdress).join(', ') +
      '.',
  })
  @IsEnum(moduleNamesObjectAdress)
  @IsOptional()
  module?: string;
}
