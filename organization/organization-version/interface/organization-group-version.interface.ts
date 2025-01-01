import { AppLanguages, JsonValue } from "types/global/types"
import * as Multer from "multer"
import { PaymentTypesVersionDto } from "../dto/create-peyment-types-version.dto"
import { PhoneVersionDto, PhoneType } from "../dto/create-phone-version.dto"
import { PictureType } from "../dto/file-upload-version.dto"
import {
  NearbeesType,
  NearbeesTypeResponse,
} from "types/organization/organization/dto/create-nearbees.dto"
import { ProductServiceType } from "types/organization/organization/dto/create-product-service.dto"
export namespace OrganizationVersionInterfaces {
  export interface Request {
    id: number
    mainOrganizationId: number
    subCategoryId: number
    regionId: number
    cityId: number
    districtId?: number
    villageId?: number
    avenueId?: number
    residentialId?: number
    areaId?: number
    streetId?: number
    laneId?: number
    impasseId?: number
    segmentId: number
    passageId?: number
    name?: string
    legalName?: string
    secret?: string
    kvartal?: string
    address?: string
    home?: string
    apartment?: string
    description?: string
    inn?: string
    bankNumber?: string
    account?: string
    mail?: string
    manager?: string
    index: bigint
    staffNumber?: string
    status: number
    createdBy: string
    nearbyDescription?: string
    paymentTypes?: PaymentTypesVersionDto
    productService?: ProductServiceType[]
    nearbees?: NearbeesTypeResponse[]
    phone?: PhoneType[]
    Picture?: PictureType[]
    workTime?: JsonValue | string
    transport?: JsonValue | string
    // ProductServices?: ProductServiceTypeR[];
    // Nearbees?: NearbeesType[];w
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
  }

  export interface Update {
    id?: number
    mainOrganizationId?: number
    subCategoryId?: number
    regionId?: number
    cityId?: number
    districtId?: number
    villageId?: number
    avenueId?: number
    residentialId?: number
    areaId?: number
    streetId?: number
    laneId?: number
    impasseId?: number
    segmentId?: number
    passageId?: number
    name?: string
    legalName?: string
    secret?: string
    kvartal?: string
    address?: string
    home?: string
    apartment?: string
    description?: string
    inn?: string
    bankNumber?: string
    account?: string
    mail?: string
    manager?: string
    index: bigint
    paymentTypes?: PaymentTypesVersionDto
    workTime?: {}
    transport?: {}
    photos?: Array<Multer.File>
    deletePicture?: number[]
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
  }

  export interface Response {
    id: number
    mainOrganizationId: number
    subCategoryId: number
    regionId: number
    cityId: number
    districtId: number
    villageId: number
    avenueId: number
    residentialId: number
    areaId: number
    streetId: number
    laneId: number
    impasseId: number
    segmentId: number
    passageId: number
    name?: string
    legalName?: string
    secret?: string
    kvartal?: string
    address?: string
    home?: string
    apartment?: string
    description?: string
    inn?: string
    bankNumber?: string
    account?: string
    mail?: string
    clientId?: string
    manager?: string
    index: bigint
    paymentTypes?: PaymentTypesVersionDto
    phone?: PhoneType[]
    PictureVersion?: PictureType[]
    workTime?: JsonValue | string
    transport?: JsonValue | string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
  }

  export interface ResponseWithoutPagination {
    totalDocs: number
    data: Response[]
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number
  }
}
