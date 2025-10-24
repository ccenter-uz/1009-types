import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { LanguageDto } from 'types/global';
import { NotificationInterfaces } from 'types/organization/notification';

export class NotificationCreateDto implements NotificationInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  organizationId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  userId: string;
}
