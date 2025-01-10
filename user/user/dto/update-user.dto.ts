import {
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { ErrorMessageForPassword, IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { UserInterfaces } from '../interface/user-group.interface';

export class UserUpdateDto extends IdDto implements UserInterfaces.Update {
  @ApiProperty()
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(13)
  phoneNumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_\(\)])/, {
    message: ErrorMessageForPassword,
  })
  oldPassword?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(8, 20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_\(\)])/, {
    message: ErrorMessageForPassword,
  })
  newPassword?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  roleId?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  numericId?: string;
}
