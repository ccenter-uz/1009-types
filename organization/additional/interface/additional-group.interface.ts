import { AppLanguages } from 'types/global/types';
import { AdditionalTableOrContnetInterfaces } from './additional-table-group';
import { AdditionalTableOrContentUpdateDto } from '../dto/table-update.dto';
export namespace AdditionalInterfaces {
  export interface Request {
    staffNumber?: string;
    name: AppLanguages;
    warning: AppLanguages;
    mention: AppLanguages;
    content: AdditionalTableOrContnetInterfaces[];
    table: AdditionalTableOrContnetInterfaces[];
  }

  export interface Update {
    id: number;
    staffNumber?: string;
    name?: AppLanguages;
    warning?: AppLanguages;
    mention?: AppLanguages;
    content?: AdditionalTableOrContentUpdateDto[];
    table?: AdditionalTableOrContentUpdateDto[];
  }

  export interface Response {
    id: number;
    staffNumber?: string;
    name?: {} | string;
    warning?: {} | string;
    mention?: {} | string;
    content?: AdditionalTableOrContnetInterfaces[];
    table?: AdditionalTableOrContnetInterfaces[];
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
