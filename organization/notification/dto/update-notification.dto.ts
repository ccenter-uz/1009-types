import {
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IdDto, LanguageDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { NotificationInterfaces } from '../interface/notification-group.interface';

export class NotificationUpdateDto
  extends IdDto
  implements NotificationInterfaces.Update
{
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  organizationId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  message: string;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  isRead: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  allRead: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  userId: string;
}
