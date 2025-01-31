import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { IdDto, LogDataType } from 'types/global';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class MainOrganizationUpdateDto
  extends IdDto
  implements MainOrganizationInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsOptional()
  @IsString()
  name: string;
  
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  orderNumber?: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
