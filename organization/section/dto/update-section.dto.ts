import {
  IsOptional,
  IsString,
} from 'class-validator';
import { IdDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';
import { SectionInterfaces } from '../interface/section-group.interface';

export class SectionUpdateDto extends IdDto implements SectionInterfaces.Update {
  @ApiProperty({
    example: 'swager-name'
  })
  @IsOptional()
  @IsString()
  name: string;
}
