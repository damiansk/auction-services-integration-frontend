import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-radio-btn',
  templateUrl: './radio-button-attribute.component.html',
  styleUrls: ['./input-attribute.scss'],
})
export class RadioButtonAttributeComponent {

  @Input() attribute: Attribute;
  @Input() form: FormGroup;

}
