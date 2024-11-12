import {
  IsNumber,
  IsOptional,
} from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { RolePermissionInterfaces } from '../interface/role-permission-group.interface';


export class RolePermissionUpdateDto extends IdDto implements RolePermissionInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  permissionId?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  roleId?: number;
}
