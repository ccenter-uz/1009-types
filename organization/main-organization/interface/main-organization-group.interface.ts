import { AppLanguages, JsonObject, JsonValue, LanguageRequestType } from 'types/global/types';
export namespace MainOrganizationInterfaces {
  export interface Request {
    staffNumber: number;
    name: string;
  }

  export interface Update {
    id: number;
    staffNumber?: number;
    name?: string;
  }

  export interface Response {
    id: number;
    staffNumber: number;
    name?:  string,
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
