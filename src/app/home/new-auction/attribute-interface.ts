export interface Attribute {
  fieldType: string;
  formType: string;
  id: number;
  name: string;
  possibleValues: AttributePossibleValue[];
  required: boolean;
  description: string;
}

export interface AttributePossibleValue {
  id: number;
  value: string;
}

export interface Category {
  id: number;
  name: string;
  parameters: any;
  parentCategory: any;
  subcategories: Category[];
}
