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

export interface AppLanguages {
  uz: string,
  cy: string,
  ru: string
}
// | AppLanguagesList.UZ
// | AppLanguagesList.CY
// | AppLanguagesList.RU;

export enum AppLanguagesList {
  RU = 'ru',
  UZ = 'uz',
  CY = 'cy',
}

