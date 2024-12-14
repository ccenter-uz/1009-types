import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { SectionInterfaces } from '../interface/section-group.interface';

export class SectionCreateDto implements SectionInterfaces.Request {
  @ApiProperty({
    example: 'swager-name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
