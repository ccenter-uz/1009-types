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

export const RegExForPassowrd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const ErrorMessageForPassword =
  'Password too weak. Must include uppercase, lowercase, number, and special character.';
