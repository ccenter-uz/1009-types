import {
  AppLanguages,
} from 'types/global/types';

export namespace AreaInterfaces {
  export interface Request {
    regionId: number;
    cityId: number;
    index: number;
    staffId: number;
    districtId: number;
    name: AppLanguages;
    old_name: AppLanguages;
    new_name: AppLanguages;
  }

  export interface Update {
    id: number;
    regionId?: number;
    cityId?: number;
    index?: number;
    staffId?: number;
    districtId?: number;
    name?: AppLanguages;
    old_name?: AppLanguages;
    new_name?: AppLanguages;
  }

  export interface Response {
    id: number;
    regionId: number;
    cityId: number;
    index: number;
    staffId: number;
    districtId: number;
    name?: {} | string;
    old_name?: {} | string;
    new_name?: {} | string;
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
