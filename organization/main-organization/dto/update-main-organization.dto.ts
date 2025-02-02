import { IsObject, IsOptional, IsString } from 'class-validator';
import { IdDto, LogDataType } from 'types/global';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';
import { ApiProperty } from '@nestjs/swagger';
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

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
