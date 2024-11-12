export namespace RolePermissionInterfaces {
  export interface Request {
    roleId: number;
    permissionId: number;
  }

  export interface Update {
    id: number;
    roleId?: number;
    permissionId?: number;
  }

  export interface Response {
    id: number;
    roleId: number;
    permissionId: number;
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
