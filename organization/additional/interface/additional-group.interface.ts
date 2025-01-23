import { AppLanguages } from 'types/global/types';
export namespace AdditionalInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
    warning: AppLanguages;
    mention: AppLanguages;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
    warning?: AppLanguages;
    mention?: AppLanguages;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    name?: {} | string;
    warning?: {} | string;
    mention?: {} | string;
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