import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { Type } from 'class-transformer';

export class MainOrganizationCreateDto
  implements MainOrganizationInterfaces.Request
{
  @IsOptional()
  @IsString()
  staffNumber?: string;
  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
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
}
