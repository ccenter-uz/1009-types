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
export class OrganizationVersionUpdateDto
  extends IdDto
  implements OrganizationVersionInterfaces.Update
{
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceCategoryId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  productServiceSubCategoryId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  districtId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  villageId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  avenueId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  residentialId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  areaId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  streetId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  laneId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  impasseId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  nearbyId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  segmentId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  sectionId: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  legalName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  secret: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  kvartal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  home: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  apartment: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  inn: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bank_number: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  account: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  mail: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  clientId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  maneger?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  index?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nearbyDescription?: string;

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
    required: false,
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
    required: false,
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  workTime: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: {
      ru: { type: 'string', example: 'swagger-new-ru' },
      uz: { type: 'string', example: 'swagger-new-uz' },
      cy: { type: 'string', example: 'swagger-new-cy' },
    },
    required: false,
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
        { phone: '+998907654321', phoneId: 2, action: 'create' },
      ],
    },
    required: false,
  })
  @IsOptional()
  // @IsArray()
  phone: PhoneType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
    // description: 'Array of images for work time',
  })
  photos: Array<Multer.File>;

  @ApiProperty({
    type: 'array',
    items: { type: 'string' },
    required: false,
    // description: 'Array of images for work time',
  })
  @IsOptional()
  delete_photos: Array<string>;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkVersionDto)
  PhotoLink: PhotoLinkVersionDto[];
}
