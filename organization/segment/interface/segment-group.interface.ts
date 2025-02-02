export namespace SegmentInterfaces {
  export interface Request {
    name: string;
  }

  export interface Update {
    id: number;
    name?: string;
  }

  export interface Response {
    id: number;
    name?: string;
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
