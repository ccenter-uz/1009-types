import { LanguageRequestEnum, PermissionsEnum } from './constants';

export type JsonObject = { [Key in string]?: JsonValue };

export type JsonArray = Array<JsonValue>;

export type JsonValue =
  | string
  | number
  | boolean
  | JsonObject
  | JsonArray
  | null;

export interface IAnyObject {
  [key: string]: any;
}

export interface IObjectList<T> {
  [key: string]: T;
}

export type AppLanguages = {
  uz: string;
  cy: string;
  ru: string;
};

export type LanguageRequestType =
  | LanguageRequestEnum.UZ
  | LanguageRequestEnum.CY
  | LanguageRequestEnum.RU;

export interface ApiResponseType<T> {
  status: number;
  result: T | null;
  error: ApiErrorType | null;
}

export interface ApiErrorType {
  message: string;
  details?: any;
}

export type PermissionType =
  | PermissionsEnum.CREATE_DATA
  | PermissionsEnum.READ_DATA
  | PermissionsEnum.UPDATE_DATA
  | PermissionsEnum.DELETE_DATA
  | PermissionsEnum.RESTORE_DATA;


  export enum StatusEnum {
    ACTIVE = 1,
    INACTIVE = 0,
    PENDING = 2,
  }