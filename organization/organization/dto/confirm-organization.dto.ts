import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class ConfirmDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNumber()
  @IsOptional()
  role?: string;

  @IsNumber()
  @IsOptional()
  staffNumber?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  status?: number;

  @IsNumber()
  @IsOptional()
  organizationId?: number;
}
