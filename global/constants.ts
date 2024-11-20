export enum AppLanguagesList {
  RU = 'ru',
  UZ = 'uz',
  CY = 'cy',
}

export enum DefaultStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}

export enum LanguageRequestEnum {
  UZ = 'uz',
  CY = 'cy',
  RU = 'ru',
}

export const ErrorMessageForPassword =
  'Password too weak. Must include uppercase, lowercase, number, and special character.';

export enum Roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  OPERATOR = 'operator',
  USER = 'user',
}

export enum PermissionsEnum {
  CREATE_DATA = 'CREATE_DATA',
  READ_DATA = 'READ_DATA',
  UPDATE_DATA = 'UPDATE_DATA',
  DELETE_DATA = 'DELETE_DATA',
  RESTORE_DATA = 'RESTORE_DATA',
}
