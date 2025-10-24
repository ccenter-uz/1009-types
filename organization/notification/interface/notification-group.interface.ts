import { AppLanguages } from 'types/global/types';
export namespace NotificationInterfaces {
  export interface Request {
    organizationId: number;
    title: string;
    message: string;
    userId: string;
  }

  export interface Update {
    id: number;
    organizationId?: number;
    title?: string;
    message?: string;
    isRead?: boolean;
    allRead?: boolean;
    userId?: string;
  }

  export interface Response {
    id: number;
    organizationId?: number;
    title?: string;
    message?: string;
    userId?: number;
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
