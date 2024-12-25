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
import { ProductServiceVersionType } from './create-product-service-version.dto';
import { NearbeesVersionType } from './create-nearbees-version.dto';
import { PictureVersionType } from './update-picture-version.dto';
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
  subCategoryId: number;

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
  segmentId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  passageId: number;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  name: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  description: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  legalName: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  secret: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  kvartal: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  address: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  home: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  apartment: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  inn: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  bankNumber: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  account: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  mail: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsString()
  @Transform(({ value }) =>
    value
      .replace(/^"+|"+$/g, '')
      .replace(/\\+["]/g, '')
      .replace(/\\+/g, '')
  )
  manager: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  index: number;

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
    type: PaymentTypesVersionDto,
    required: false,
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
      dayoffs: ['Monday'],
      lunchFrom: '13:00',
      lunchTo: '14:00',
      worktimeFrom: '10:00',
      worktimeTo: '19:00',
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
    example: {
      bus: '127 AVTOBUS',
      metroStation: 'Tinchlik metro',
      microBus: '130M',
    },
    required: false,
  })
  @IsOptional()
  @IsObject()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  transport: Record<string, string>;

  @ApiProperty({
    type: Object,
    example: {
      phones: [
        { phone: '+998901234567', phoneTypeId: 1, isSecret: false },
        { phone: '+998907654321', phoneTypeId: 2, isSecret: true },
      ],
    },
    required: false,
  })
  @IsOptional()
  phone: PhoneType | string;

  @ApiProperty({
    type: Object,
    example: {
      productServices: [
        { productServiceCategoryId: 1, productServiceSubCategoryId: 1 },
        { productServiceCategoryId: 1, productServiceSubCategoryId: 2 },
      ],
    },
    required: false,
  })
  @IsOptional()
  productService: ProductServiceVersionType | string;

  @ApiProperty({
    type: Object,
    example: {
      nearbees: [
        { description: 'nearbees', nearbyId: 1 },
        { description: 'nearbees2', nearbyId: 2 },
      ],
    },
    required: false,
  })
  @IsOptional()
  nearby: NearbeesVersionType | string;

  @ApiProperty({
    type: Object,
    example: {
      pictures: [{ link: 'dasdsafds' }, { link: 'dasdsafds' }],
    },
    required: false,
  })
  @IsOptional()
  picture: PictureVersionType | string;

  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    required: false,
  })
  photos: Array<Multer.File>;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => PhotoLinkVersionDto)
  PhotoLink: PhotoLinkVersionDto[];
}
