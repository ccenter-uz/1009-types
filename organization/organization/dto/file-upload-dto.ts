
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class PhotoLinkDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  link: string;
    
}
