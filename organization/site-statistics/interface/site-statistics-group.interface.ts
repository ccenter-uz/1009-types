import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { DistrictInterfaces } from 'types/organization/district';
import { RegionInterfaces } from 'types/organization/region';
export namespace siteStatisticsInterfaces {
  export interface Request {
    organizationId: number;
    userId: number;
    address?: Array<number>;
    device: string;
    sourceSite: string;
    sessionTime: string;
  }

  export interface Response {
    id: number;
    organizationId?: number;
    userId?: number;
    address?: string;
    device?: string;
    sourceSite?: string;
    sessionTime?: string;
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
