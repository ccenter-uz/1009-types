import { OrganizationVersionInterfaces } from 'types/organization/organization-version';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsObject,
  ValidateNested,
  IsString,
  IsJSON,
  IsArray,
} from 'class-validator';
import { IdDto, LanguageDto } from 'types/global';
import { OrganizationInterfaces } from 'types/organization/organization';
import * as Multer from 'multer';
import { PhoneVersionDto, PhoneType } from './create-phone-version.dto';
import { Phone } from '../types';
import { PaymentTypesVersionDto } from './create-peyment-types-version.dto';
import { PhotoLinkVersionDto } from './file-upload-version.dto';
export class OrganizationUpdateDto
  extends IdDto
  implements OrganizationVersionInterfaces.Update
{
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceCategoryId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceSubCategoryId: number;

  @ApiProperty({ example: 1 })  
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  districtId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  villageId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  avenueId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  residentialId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  areaId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  streetId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  laneId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  impasseId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  nearbyId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  segmentId: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  sectionId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  legalName: string;

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
  @Type(() => Number)
  home: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
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
  @Type(() => Number)
  index: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  nearbyDescription: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: {
      cash: true,
      terminal: false,
      transfer: true,
      action: 'create',
    },
    type: PaymentTypesVersionDto,
  })
  @IsOptional()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  @IsObject()
  @Type(() => PaymentTypesVersionDto)
  paymentTypes: PaymentTypesVersionDto;

  @ApiProperty({
    example: {
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  workTime: Record<string, string>;

  @ApiProperty({
    type: 'object',
    properties: {
      ru: { type: 'string', example: 'swagger-new-ru' },
      uz: { type: 'string', example: 'swagger-new-uz' },
      cy: { type: 'string', example: 'swagger-new-cy' },
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  transport: Record<string, string>;
  // transport: JSON;

  @ApiProperty({
    type: Object,
    example: {
      phones: [
        { phone: '+998901234567', phoneId: 1, action: 'create' },
        { phone: '+998907654321', phoneId: 2 },
      ],
    },
  })
  @IsOptional()
  // @IsArray()
  phone: PhoneType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    // description: 'Array of images for work time',
  })
  photos: Array<Multer.File>;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkVersionDto)
  PhotoLink: PhotoLinkVersionDto[];
}
