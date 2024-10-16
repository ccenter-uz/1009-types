import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetOneDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  id = 1;

  @IsOptional()
  filter?: any;
}