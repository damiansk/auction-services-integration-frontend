export interface Attribute {
  id: number,
  name: string,
  formType: string,
  fieldType: string,
  required: boolean,
  possibleValues?: AttributePossibleValue[];
}

export interface AttributePossibleValue {
  id: number,
  value: string
}
