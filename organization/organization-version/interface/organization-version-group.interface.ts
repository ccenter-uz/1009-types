import { AppLanguages } from 'types/global/types';
import { PhoneVersion } from '../types';

export namespace OrganizationVersionInterfaces {
  export interface Request {
    mainOrganizationId: number;
    subCategoryId: number;
    productServiceCategoryId: number;
    productServiceSubCategoryId: number;
    regionId: number;
    cityId: number;
    districtId: number;
    villageId: number;
    avenueId: number;
    residentialId: number;
    areaId: number;
    streetId: number;
    laneId: number;
    impasseId: number;
    nearbyId: number;
    segmentId: number;
    sectionId: number;
    name: string;
    lagelName: string;
    secret: string;
    kvartal: string;
    address: string;
    home: number;
    apartment: number;
    inn: string;
    bank_number: string;
    account: string;
    mail: string;
    clientId: string;
    maneger: string;
    index: number;
    nearbyDescription: string;
    paymentTypes: JSON;
    workTime: JSON;
    transport: JSON;
    phones: PhoneVersion;
  }

  export interface Update {
    id: number;
    mainOrganizationId?: number;
    subCategoryId?: number;
    productServiceCategoryId?: number;
    productServiceSubCategoryId?: number;
    regionId?: number;
    cityId?: number;
    districtId?: number;
    villageId?: number;
    avenueId?: number;
    residentialId?: number;
    areaId?: number;
    streetId?: number;
    laneId?: number;
    impasseId?: number;
    nearbyId?: number;
    segmentId?: number;
    sectionId?: number;
    name?: string;
    lagelName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: number;
    apartment?: number;
    inn?: string;
    bank_number?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    maneger?: string;
    index?: number;
    nearbyDescription?: string;
    paymentTypes?: JSON;
    workTime?: JSON;
    transport?: JSON;
  }

  export interface Response {
    id: number;
    mainOrganizationId: number;
    subCategoryId: number;
    productServiceCategoryId: number;
    productServiceSubCategoryId: number;
    regionId: number;
    cityId: number;
    districtId: number;
    villageId: number;
    avenueId: number;
    residentialId: number;
    areaId: number;
    streetId: number;
    laneId: number;
    impasseId: number;
    nearbyId: number;
    segmentId: number;
    sectionId: number;
    name?: string;
    lagelName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: number;
    apartment?: number;
    inn?: string;
    bank_number?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    maneger?: string;
    index?: number;
    nearbyDescription?: string;
    paymentTypes?: JSON;
    workTime?: JSON;
    transport?: JSON;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
