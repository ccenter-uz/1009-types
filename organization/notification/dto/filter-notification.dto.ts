import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationFilterDto extends ListQueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  organizationId?: number;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isRead: boolean;
}
