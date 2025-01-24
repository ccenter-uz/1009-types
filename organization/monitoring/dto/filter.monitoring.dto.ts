import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class MonitoringFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  organizationId?: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  roleId: number;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @Type(() => Number)
  userId: number;
}
