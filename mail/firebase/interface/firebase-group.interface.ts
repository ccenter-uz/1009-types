export namespace FirebaseInterfaces {
  export interface Request {
    smsCode: number;
    phoneNumber: string;
  }

  export interface Response {
    id: number;
    message: string;
    phoneNumber: string;
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
