import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { LanguageDto, LogDataType } from 'types/global';
import { FirebaseInterfaces } from 'types/mail/firebase';

export class FirebaseCreateDto implements FirebaseInterfaces.Request {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  smsCode: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(13)
  phoneNumber: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
