import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class SubCategoryFilterDto extends ListQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  categoryId?: number;
}
