import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsObject } from 'class-validator';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';
import { LogDataType } from 'types/global';

export class NearbyCategoryCreateDto
  implements NearbyCategoryInterfaces.Request
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
