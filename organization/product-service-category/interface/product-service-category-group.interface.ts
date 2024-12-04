import { AppLanguages, JsonObject, JsonValue, LanguageRequestType } from 'types/global/types';
export namespace ProductServiseCategoryInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    name?: {} | string,
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
