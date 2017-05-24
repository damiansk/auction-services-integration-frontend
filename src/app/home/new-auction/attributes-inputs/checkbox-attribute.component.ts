import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-checkbox',
  templateUrl: './checkbox-attribute.component.html',
  styleUrls: ['./input-attribute.scss'],
})
export class CheckboxAttributeComponent {

  @Input() attribute: Attribute;
  @Input() form: FormGroup;

}
