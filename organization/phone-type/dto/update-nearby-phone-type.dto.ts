import { IsOptional, IsString } from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { PhoneTypeInterfaces } from '../interface/nearby-phone-type-group.interface';

export class PhoneTypeUpdateDto
  extends IdDto
  implements PhoneTypeInterfaces.Update
{
  @IsOptional()
  @IsString()
  staffNumber?: string;

  @ApiProperty({
    example: 'swager-name',
  })
  @IsOptional()
  @IsString()
  name: string;
}
