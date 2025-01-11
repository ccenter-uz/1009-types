export interface ExcelData {
  CLNT_ID: string;
  START: string;
  STOP: string | null; // Уточним, что может быть null
  NAME?: string;
  PHONE: any; // Массив объектов PhoneDto
  SEGMENT: number;
  ACCOUNT: string;
  INN: string;
  BANK: string;
  ADDRESS: string;
  MAIL: string;
  // createdBy: string;
  // status: number;
  //   : 60118445,
  //   : 45516.000127314815,
  //   : 401768.0001273148,
  //   : '"O`ZSANOATQURILISHMATERIALLARI" UYUSHMASI',
  //   : 998909713341,
  //   : 'B2B SME',
  //   : 1939647460,
  //   : 207293307,
  //   : 20210000205045436000,
  //   : 'Ð\x8EÐ·Ð±ÐµÐºÐ¸Ñ\x81Ñ\x82Ð¾Ð½ Ð ÐµÑ\x81Ð¿Ñ\x83Ð±Ð»Ð¸ÐºÐ°Ñ\x81Ð¸, Ð¢Ð¾Ñ\x88ÐºÐµÐ½Ñ\x82 Ñ\x88Ð°Ò³Ñ\x80Ð¸, Ð¯ÐºÐºÐ°Ñ\x81Ð°Ñ\x80Ð¾Ð¹ Ñ\x82Ñ\x83Ð¼Ð°Ð½Ð¸, Ð¢Ð\x90Ð
  // ¤Ð¤Ð\x90Ð\x9AÐ£Ð  ÐºÑ\x9EÑ\x87Ð°Ñ\x81Ð¸, Ñ\x83Ð¹. 68Ð°',
  //   : '1111@gmail.uz'
}
export interface scriptResponse {
  new: ExcelData[] | [];
  deactive: ExcelData[] | [];
}
