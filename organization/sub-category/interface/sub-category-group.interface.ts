import { AppLanguages } from 'types/global/types';
import { CategoryInterfaces } from 'types/organization/category';
export namespace SubCategoryInterfaces {
  export interface Request {
    categoryId: number;
    staffNumber?: string;
    name: AppLanguages;
  }

  export interface Update {
    id: number;
    categoryId?: number;
    staffNumber?: string;
    name?: AppLanguages;
  }

  export interface Response {
    id: number;
    categoryId: number;
    staffNumber?: string;
    name?: {} | string;
    category: CategoryInterfaces.Response;
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
