export namespace NearbyCategoryInterfaces {
  export interface Request {
    staffNumber?: string;
    name: string;
    orderNumber?: number;
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: string;
    orderNumber?: number;
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    editedStaffNumber?: string;
    name?: string;
    orderNumber?: number;
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
