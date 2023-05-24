export const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

export enum FIELD_TYPE {
  EMAIL,
  TEXT,
  PASSWORD,
}

export enum FIELD_TYPE_ERRORS {
  EMAIL = 'Email format is incorrect',
  TEXT = 'Please fill out this field',
  PASSWORD = 'Password does not match'
}