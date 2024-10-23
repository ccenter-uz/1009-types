import { AppLanguages, JsonObject, JsonValue, LanguageRequestType } from 'types/global/types';
export namespace SubCategoryInterfaces {
  export interface Request {
    categoryId: number;
    staffNumber: number;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    categoryId?: number;
    staffNumber?: number;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    categoryId: number;
    staffNumber: number;
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
