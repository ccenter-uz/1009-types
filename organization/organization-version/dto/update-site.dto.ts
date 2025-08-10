// site.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { removeSymbols } from 'types/global/helper';

export class SiteDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(removeSymbols)
  site_description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(removeSymbols)
  banner?: string;

  @ApiPropertyOptional({
    type: Object,
    example: {
      maps: [
        { lon: '12346469', lat: '12346469' },
        { lon: '12346469', lat: '12346469' },
      ],
    },
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  map?: Record<string, string>;
}
