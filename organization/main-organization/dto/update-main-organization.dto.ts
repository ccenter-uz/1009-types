import { IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
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
}
