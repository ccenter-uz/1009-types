import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MainOrganizationInterfaces } from '../interface/main-organization-group.interface';

export class MainOrganizationCreateDto
  implements MainOrganizationInterfaces.Request
{
  @ApiProperty()
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
