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
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';

export class MainOrganizationCreateDto
  implements MainOrganizationInterfaces.Request
{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  staffNumber?: string;
  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
