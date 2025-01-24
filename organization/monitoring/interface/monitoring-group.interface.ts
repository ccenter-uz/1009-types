import { JsonObject } from 'types/global';

export namespace MonitoringInterfaces {
  export interface Response {
    id: number;
    userId: number;
    userNumericId: number;
    userFullName: string;
    userRole: string;
    organizationId: number;
    organizationName: string;
    method: string;
    path: string;
    request: JsonObject;
    response: JsonObject;
    status: number;
    duration: number;
    timestamp: Date;
  }

  export interface ResponseWithoutPagination {
    totalDocs: number;
    data: Response[];
  }

  export interface ResponseWithPagination extends ResponseWithoutPagination {
    totalPage: number;
  }
}
