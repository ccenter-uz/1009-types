import { IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
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
}
