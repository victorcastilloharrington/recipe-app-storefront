import { FormField } from "@typedefs/helpers";
import { EMAIL_REGEX, FIELD_TYPE } from "./constants";

class ValidateFormValue {
  value?: string;
  comparevalue?: string;

  constructor(value?: string, comparevalue?: string) {
    this.value = value;
    this.comparevalue = comparevalue;
  }

  validateEmail() {
    return Boolean(!this.value || !this.value?.match(EMAIL_REGEX))
  }

  validateText() {
    return Boolean(!this.value || this.value?.length === 0)
  }

  validatePassword() {
    return Boolean(!(this.value && this.comparevalue) || !(this.value === this.comparevalue));
  }
}

export class ValidateForm {
  fields: FormField[]
  errors: string[]

  constructor(fields: FormField[]) {
    this.fields = fields
    this.errors = []
  }

  validateFormFields() {
    this.fields.map(field => {
      const validatedField = new ValidateFormValue(field.value, field.compareValue)
      let error = false

      switch (field.type) {
        case FIELD_TYPE.EMAIL:
          error = validatedField.validateEmail()
          break;
        case FIELD_TYPE.TEXT:
          error = validatedField.validateText()
          break;
        case FIELD_TYPE.PASSWORD:
          error = validatedField.validatePassword()
          break;
      }

      if (error) this.errors.push(field.field)
    })

    return this.errors
  }
}

