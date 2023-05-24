import { FIELD_TYPE } from "../constants";

export interface FormField {
  field: string;
  type: FIELD_TYPE;
  value?: string;
  compareValue?: string;
}