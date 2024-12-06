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
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { ApiProperty } from '@nestjs/swagger';
export class MainOrganizationUpdateDto
  extends IdDto
  implements MainOrganizationInterfaces.Update {

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
