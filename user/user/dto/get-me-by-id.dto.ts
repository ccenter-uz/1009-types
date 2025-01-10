import { IsInt, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageRequestDto } from '../../../global/dto/language-request.dto';

export class GetMeDto  {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  id = 1;

}
