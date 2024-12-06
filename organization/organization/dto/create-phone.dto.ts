import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class PhoneDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  phoneId: number;

  @ApiProperty({
    example: 'create',
    required: false,
  })
  @IsString()
  @IsOptional()
  action?: string;
}
