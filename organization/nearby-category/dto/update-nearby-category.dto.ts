import { IsObject, IsOptional, IsString } from 'class-validator';
import { IdDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { NearbyCategoryInterfaces } from '../interface/nearby-category-group.interface';

export class NearbyCategoryUpdateDto
  extends IdDto
  implements NearbyCategoryInterfaces.Update
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
