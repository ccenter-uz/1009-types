export namespace UserInterfaces {
  export interface LogInRequest {
    phoneNumber: string;
    password: string;
  }

  export interface LogInResponse {
    accessToken: string;
  }

  export interface Request {
    fullName: string;
    phoneNumber: string;
    password: string;
    roleId: number;
    numericId?: string;
  }

  export interface Update {
    id: number;
    fullName?: string;
    phoneNumber?: string;
    password?: string;
    roleId?: number;
    numericId?: string;
  }

  export interface Response {
    id: number;
    fullName: string;
    phoneNumber: string;
    roleId: number;
    numericId: string;
    status: number;
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
