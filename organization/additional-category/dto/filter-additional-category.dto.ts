import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ListQueryDto } from 'types/global';
import { ApiProperty } from '@nestjs/swagger';

export class AdditionalCategoryFilterDto extends ListQueryDto {
  // @ApiProperty({
  //   type: Number,
  //   required: false,
  // })
  // @IsNumber()
  // @IsOptional()
  // @Type(() => Number)
  // cityId?: number;
}
