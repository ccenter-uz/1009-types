import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { OrganizationInterfaces } from 'types/organization/organization';
import * as Multer from 'multer';
import { PhoneDto, PhoneType } from './create-phone.dto';
import { Phone } from '../types/index';
import { PaymentTypesDto } from './create-peyment-types.dto';
import { PhotoLinkDto } from './file-upload-dto';
import { ProductServiceType } from './create-product-service.dto';
import { NearbeesType } from './create-nearbees.dto';

export class OrganizationCreateDto implements OrganizationInterfaces.Request {
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  subCategoryId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  regionId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  cityId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  districtId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  villageId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  avenueId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  residentialId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  neighborhoodId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  areaId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  streetId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  laneId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  impasseId?: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  segmentId?: number;

  @ApiProperty({ example: 1, required: false })
  @Type(() => Number)
  @Transform(({ value }) => (typeof parseInt(value) == 'number' ? value : null))
  @IsOptional()
  @IsNumber()
  passageId?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  name: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  description?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  legalName?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  secret?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  kvartal?: string;

  @ApiProperty(  {required: false })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  address: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  home?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  apartment?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  inn?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  bankNumber?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  account?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  mail?: string;

  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  manager?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsString()
  @Type(() => String)
  index?: string;

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
    },
    type: PaymentTypesDto,
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  @IsObject()
  @Type(() => PaymentTypesDto)
  paymentTypes: PaymentTypesDto;

  @ApiProperty({
    example: {
      dayoffs: ['Monday'],
      lunchFrom: '13:00',
      lunchTo: '14:00',
      worktimeFrom: '10:00',
      worktimeTo: '19:00',
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  workTime?: Record<string, string>;

  @ApiProperty({
    type: 'object',
    properties: {
      bus: { type: 'string', example: '127 AVTOBUS' },
      metroStation: { type: 'string', example: 'Tinchlik metro' },
      microBus: { type: 'string', example: '130M' },
    },
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  transport?: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: {
      phones: [
        { phone: '+998901234567', phoneTypeId: 1, isSecret: false },
        { phone: '+998907654321', phoneTypeId: 2, isSecret: true },
      ],
    },
  })
  @IsNotEmpty()
  phone: PhoneType | string;

  @ApiProperty({
    type: Object,
    example: {
      productServices: [
        { productServiceCategoryId: 1, productServiceSubCategoryId: 1 },
        { productServiceCategoryId: 1, productServiceSubCategoryId: 2 },
      ],
    },
  })
  @IsNotEmpty()
  productService: ProductServiceType | string;

  @ApiProperty({
    type: Object,
    example: {
      nearbees: [
        { description: 'nearbees', nearbyId: 1 },
        { description: 'nearbees2', nearbyId: 2 },
      ],
    },
  })
  @IsNotEmpty()
  nearby: NearbeesType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
  })
  photos: Array<Multer.File>;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkDto)
  PhotoLink: PhotoLinkDto[];

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
