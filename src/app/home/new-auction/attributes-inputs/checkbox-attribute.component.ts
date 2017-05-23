import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-checkbox',
  templateUrl: './checkbox-attribute.component.html',
  styleUrls: ['./input-attribute.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxAttributeComponent),
      multi: true
    }
  ]
})
export class CheckboxAttributeComponent implements ControlValueAccessor {

  @Input() attribute: Attribute;
  @Input() form: FormGroup;
  private text: string;
  private data: any = JSON.stringify({ "siala": "babamak"});

  private propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    if (obj) {
      this.data = obj;
      this.text = obj.toString();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  private onChange(event) {
    console.log(event);
    this.propagateChange(this.data);
  }

}
