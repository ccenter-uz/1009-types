import { AppLanguages } from 'types/global/types';
import { CityInterfaces } from 'types/organization/city';
import { RegionInterfaces } from 'types/organization/region';
export namespace NearbyInterfaces {
  export interface Request {
    nearbyCategoryId: number;
    regionId: number;
    cityId: number;
    staffNumber?: string;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    nearbyCategoryId?: number;
    regionId?: number;
    cityId?: number;
    staffNumber?: string;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    nearbyCategoryId: number;
    regionId: number;
    cityId: number;
    staffNumber?: string;
    name?: {} | string;
    region?: RegionInterfaces.Response;
    city?: CityInterfaces.Response;
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
