import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PaymentTypesDto } from '../dto/create-peyment-types-version.dto';
import { PhoneDto, PhoneType } from '../dto/create-phone-version.dto';
import { PictureType } from '../dto/file-upload-version.dto';
export namespace OrganizationVersionInterfaces {
  export interface Request {
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
    legalName?: string;
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
    staffNumber?: string;
    status: string;
    createdBy: string;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesDto;
    phone?: PhoneType[];
    Picture: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
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
    legalName?: string;
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
    paymentTypes?: PaymentTypesDto;
    phone?: PhoneDto[];
    workTime?: JSON;
    transport?: JSON;
    photos?: Array<Multer.File>;
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
    legalName?: string;
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
    paymentTypes?: PaymentTypesDto;
    phone?: PhoneType[];
    Picture: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;
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
