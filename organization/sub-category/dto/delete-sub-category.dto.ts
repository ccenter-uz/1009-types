import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { DeleteDto, ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryDeleteDto extends DeleteDto {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Type(() => String)
  deleteReason?: string;
}
