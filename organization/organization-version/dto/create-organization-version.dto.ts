import { PhoneVersion } from './../types/index';
// import { PhoneVersion } from './../../../../dist/types/organization/organization-version/types/index.d';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto } from 'types/global';
import { OrganizationVersionInterfaces } from 'types/organization/organization-version';

export class OrganizationVersionCreateDto
  implements OrganizationVersionInterfaces.Request
{
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  mainOrganizationId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subCategoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productServiceCategoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  productServiceSubCategoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  districtId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  villageId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  avenueId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  residentialId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  areaId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  streetId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  laneId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  impasseId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nearbyId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  segmentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  sectionId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lagelName: string;

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
  @IsNumber()
  home: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  apartment: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  inn: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bank_number: string;

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
  maneger: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  index: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nearbyDescription: string;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsJSON()
  @ValidateNested()
  // @Type(() => LanguageDto)
  paymentTypes: JSON;

  @ApiProperty({
    example: {
      ru: 'swagger-old-ru',
      uz: 'swagger-old-uz',
      cy: 'swagger-old-cy',
    },
  })
  @IsNotEmpty()
  @IsJSON()
  @ValidateNested()
  // @Type(() => LanguageDto)
  workTime: JSON;

  @ApiProperty({
    example: {
      ru: 'swagger-new-ru',
      uz: 'swagger-new-uz',
      cy: 'swagger-new-cy',
    },
  })
  @IsNotEmpty()
  @IsJSON()
  @ValidateNested()
  @Type(() => LanguageDto)
  transport: JSON;

  @ApiProperty({
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  // @Type(() => PhoneVersion)
  phones: PhoneVersion;
}
