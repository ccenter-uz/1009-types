import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { LogDataType } from 'types/global';

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

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
