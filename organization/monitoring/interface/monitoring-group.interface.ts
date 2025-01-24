import { JsonObject } from 'types/global';

export namespace MonitoringInterfaces {
  export interface Response {
    id: number;
    userId: number;
    userNumericId: string;
    userFullName: string;
    userRole: string;
    organizationId: number;
    organizationName: string;
    method: string;
    path: string;
    request: string;
    response: string;
    status: number;
    duration: number;
    createdAt: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
