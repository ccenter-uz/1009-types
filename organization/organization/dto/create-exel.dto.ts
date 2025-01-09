export interface PhoneDtoExel {
  phone: string;
  PhoneTypeId?: number | null; // ID типа телефона (опционально)
  isSecret: boolean; // Всегда true
}

export interface CreateExelData {
  clientId: string;
  createdAt: string;
  deletedAt: string | null; // Уточним, что может быть null
  name?: string;
  Phone: any; // Массив объектов PhoneDto
  segmentId: number;
  account: string;
  inn: string;
  bankNumber: string;
  address: string;
  mail: string;
  createdBy: string;
  status: number;
}
