import { ApiProperty } from '@nestjs/swagger';

export class ExcelData {
  @ApiProperty({ description: 'Unique client ID' })
  CLNT_ID: string;

  @ApiProperty({ description: 'Client name (optional)', required: false })
  NAME?: string;

  @ApiProperty({ description: 'Phone details, should be an object or array' })
  PHONE: string; 

  @ApiProperty({ description: 'Segment identifier' })
  SEGMENT: string;

  @ApiProperty({ description: 'Account information' })
  ACCOUNT: string;

  @ApiProperty({ description: 'Client INN' })
  INN: string;

  @ApiProperty({ description: 'Bank details' })
  BANK: string;

  @ApiProperty({ description: 'Client address' })
  ADDRESS: string;

  @ApiProperty({ description: 'Email address' })
  MAIL: string;

  @ApiProperty({ description: 'Fields to be updated, separated by semicolons' })
  UPDATES: string;
}

export class scriptResponse {
  @ApiProperty({ description: 'New organizations data', type: [ExcelData] })
  new: ExcelData[] | [];

  @ApiProperty({
    description: 'Deactivated organizations data',
    type: [ExcelData],
  })
  deactive: ExcelData[] | [];
}
