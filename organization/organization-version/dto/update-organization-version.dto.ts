import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
  IsJSON,
} from 'class-validator';
import { IdDto, LanguageDto } from 'types/global';
import { OrganizationInterfaces } from 'types/organization/organization';
import * as Multer from 'multer';
import { PhoneDto } from './create-phone-version.dto';
import { Phone } from '../types';
import { PaymentTypesDto } from './create-peyment-types-version.dto';
export class OrganizationUpdateDto
  extends IdDto
  implements OrganizationInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  mainOrganizationId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  subCategoryId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  productServiceCategoryId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  productServiceSubCategoryId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  regionId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  districtId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  villageId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  avenueId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  residentialId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  areaId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  streetId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  laneId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  impasseId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  nearbyId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  segmentId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sectionId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  legelName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  secret: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  kvartal: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  home: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  apartment: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bank_number: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  account: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  mail: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  clientId: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  maneger: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  index: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  nearbyDescription: string;

  @ApiProperty({
    example: {
      cash: true,
      terminal: false,
      transfer: true,
      action: 'create',
    },
    type: PaymentTypesDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => PaymentTypesDto)
  paymentTypes: PaymentTypesDto;

  @ApiProperty({
    example: {
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => LanguageDto)
  workTime: JSON;

  @ApiProperty({
    example: {
      ru: 'swagger-new-ru',
      uz: 'swagger-new-uz',
      cy: 'swagger-new-cy',
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  // @Type(() => LanguageDto)
  transport: JSON;

  @ApiProperty({
    example: [
      { phone: '+998901234567', phoneId: 1, action: 'create' },
      { phone: '+998907654321', phoneId: 2 },
    ],
    // description: 'Array of phone objects',
    type: [PhoneDto],
  })
  @ValidateNested({ each: true })
  @Type(() => PhoneDto)
  phone: Phone[];

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    // description: 'Array of images for work time',
  })
  photos: Array<Multer.File>;
}
