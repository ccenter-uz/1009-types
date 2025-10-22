import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { ErrorMessageForPassword, IdDto, LogDataType } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { UserInterfaces } from '../interface/user-group.interface';

export class UserUpdateSmsCodeDto implements UserInterfaces.UpdateSmsCode {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  smsCode: number;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
