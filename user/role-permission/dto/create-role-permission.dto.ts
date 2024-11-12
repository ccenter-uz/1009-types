import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { RolePermissionInterfaces } from '../interface/role-permission-group.interface';

export class RolePermissionCreateDto implements RolePermissionInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  permissionId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  roleId: number;
}
