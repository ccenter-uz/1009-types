import { AppLanguages, JsonValue } from 'types/global/types';
import * as Multer from 'multer';
import { PaymentTypesVersionDto } from '../dto/create-peyment-types-version.dto';
import { PhoneVersionDto, PhoneType } from '../dto/create-phone-version.dto';
import { PictureType } from '../dto/file-upload-version.dto';
import { NearbeesType } from 'types/organization/organization/dto/create-nearbees.dto';
import { ProductServiceType } from 'types/organization/organization/dto/create-product-service.dto';
export namespace OrganizationVersionInterfaces {
  export interface Request {
    id: number;
    mainOrganizationId: number;
    subCategoryId: number;
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
    passageId: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    manager?: string;
    index?: number;
    staffNumber?: string;
    status: string;
    createdBy: string;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesVersionDto;
    productService: ProductServiceType[];
    nearby: NearbeesType[];
    phone?: PhoneType[];
    Picture?: PictureType[];
    workTime?: JsonValue | string;
    transport?: JsonValue | string;

    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }

  export interface Update {
    id?: number;
    mainOrganizationId?: number;
    subCategoryId?: number;
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
    passageId?: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    manager?: string;
    index?: number;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesVersionDto;
    workTime?: {};
    transport?: {};
    photos?: Array<Multer.File>;
    deletePicture?: number[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
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
    passageId: number;
    name?: string;
    legalName?: string;
    secret?: string;
    kvartal?: string;
    address?: string;
    home?: string;
    apartment?: string;
    description?: string;
    inn?: string;
    bankNumber?: string;
    account?: string;
    mail?: string;
    clientId?: string;
    manager?: string;
    index?: number;
    nearbyDescription?: string;
    paymentTypes?: PaymentTypesVersionDto;
    phone?: PhoneType[];
    Picture?: PictureType[];
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
