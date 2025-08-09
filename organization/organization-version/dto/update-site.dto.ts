// site.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class SiteDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  site_description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  banner?: string;

  @ApiPropertyOptional({
    type: Object,
    example: {
      socials: [
        { type: 'telegram', link: 'https://t.me' },
        { type: 'telegram', link: 'https://t.me' },
      ],
    },
  })
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? JSON.parse(value) : value
  )
  map?: Record<string, string>;
}
