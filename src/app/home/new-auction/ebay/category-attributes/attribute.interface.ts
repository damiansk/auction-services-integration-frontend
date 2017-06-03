export interface Attribute {
  id: string,
  name: string,
  formType: string,
  fieldType: string,
  required: boolean,
  possibleValues?: AttributePossibleValue[];
}

export interface AttributePossibleValue {
  id: string,
  value: string
}
