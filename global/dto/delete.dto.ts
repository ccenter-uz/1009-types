import { IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { GetOneDto } from './get-one.dto';

export class DeleteDto extends GetOneDto {
  @IsBoolean()
  @Type(() => Boolean)
  delete = false;
}