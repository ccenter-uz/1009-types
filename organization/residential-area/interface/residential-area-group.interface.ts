import { AppLanguages } from 'types/global/types';

export namespace ResidentialAreaInterfaces {
  export interface Request {
    regionId: number;
    cityId: number;
    index: number;
    staffNumber?: string;
    districtId: number;
    name: AppLanguages;
    oldName: AppLanguages;
    newName: AppLanguages;
  }

  export interface Update {
    id: number;
    regionId?: number;
    cityId?: number;
    index?: number;
    staffNumber?: string;
    districtId?: number;
    name?: AppLanguages;
    oldName?: AppLanguages;
    newName?: AppLanguages;
  }

  export interface Response {
    id: number;
    regionId: number;
    cityId: number;
    index: number;
    staffNumber?: string;
    districtId: number;
    name?: {} | string;
    oldName?: {} | string;
    newName?: {} | string;
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
