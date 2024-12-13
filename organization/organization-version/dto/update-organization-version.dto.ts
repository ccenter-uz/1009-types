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
import { OrganizationVersionInterfaces } from 'types/organization/organization-version';

export class OrganizationVersionUpdateDto
  extends IdDto
  implements OrganizationVersionInterfaces.Update
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
  lagelName: string;

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
    example: { ru: 'swagger-ru', uz: 'swagger-uz', cy: 'swagger-cy' },
  })
  @IsOptional()
  @IsObject()
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
  @IsOptional()
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
  @IsOptional()
  @IsJSON()
  @ValidateNested()
  // @Type(() => LanguageDto)
  transport: JSON;
}