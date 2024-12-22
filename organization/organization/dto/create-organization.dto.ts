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
import { LanguageDto } from 'types/global';
import { OrganizationInterfaces } from 'types/organization/organization';
import * as Multer from 'multer';
import { PhoneDto, PhoneType } from './create-phone.dto';
import { Phone } from '../types/index';
import { PaymentTypesDto } from './create-peyment-types.dto';
import { PhotoLinkDto } from './file-upload-dto';
import { ProductServiceType } from './create-product-service.dto';
import { NearbeesType } from './create-nearbees.dto';

export class OrganizationCreateDto implements OrganizationInterfaces.Request {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  mainOrganizationId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  subCategoryId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  productServiceCategoryId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  productServiceSubCategoryId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  regionId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  cityId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  districtId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  villageId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  avenueId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  residentialId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  areaId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  streetId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  laneId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  impasseId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  nearbyId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  segmentId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  sectionId: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  passageId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  legalName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  secret: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  kvartal: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  home: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  apartment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bankNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  account: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  mail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  manager: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  index: number;

  @ApiProperty()
  @IsNotEmpty()
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
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsNotEmpty()
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
  @IsNotEmpty()
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
        { phone: '+998901234567', phoneTypeId: 1, isSecret: false },
        { phone: '+998907654321', phoneTypeId: 2, isSecret: true },
      ],
    },
  })
  @IsNotEmpty()
  // @IsArray()
  phone: PhoneType | string;

  @ApiProperty({
    type: Object,
    example: {
      productServices: [
        { categoryId: 1, subCategoryId: 1 },
        { categoryId: 1, subCategoryId: 2 },
      ],
    },
  })
  @IsNotEmpty()
  // @IsArray()
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
  // @IsArray()
  nearby: NearbeesType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    // description: 'Array of images for work time',
  })
  photos: Array<Multer.File>;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkDto)
  PhotoLink: PhotoLinkDto[];
}
