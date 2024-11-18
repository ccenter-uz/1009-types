import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { UserInterfaces } from '../interface/user-group.interface';
import { ErrorMessageForPassword } from 'types/global';

export class UserLogInDto implements UserInterfaces.LogInRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(13)
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_\(\)])/, {
    message: ErrorMessageForPassword,
  })
  password: string;
}
