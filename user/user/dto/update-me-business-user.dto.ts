import {
  IsIn,
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

export class UserUpdateMeBusinessDto
  extends IdDto
  implements UserInterfaces.Update
{
  //   @ApiProperty()
  //   @IsOptional()
  //   @IsString()
  //   @MaxLength(13)
  //   phoneNumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    example: 'uz',
    description: 'User selected language (uz, ru, en)',
  })
  @IsOptional()
  @IsString()
  @IsIn(['uz', 'ru', 'en'], {
    message:
      'Language must be one of the following values: "uz", "ru", or "en".',
  })
  language?: string;

  @IsOptional()
  @IsObject()
  logData?: LogDataType;
}
