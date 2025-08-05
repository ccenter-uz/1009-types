import { OrganizationInterfaces } from 'types/organization/organization';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';

import { ErrorMessageForPassword, LogDataType } from 'types/global';

export class OrganizationBissnesCreateDto
  implements OrganizationInterfaces.RequestBisness
{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certificate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(13)
  phoneNumber: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
