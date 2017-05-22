import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-combobox',
  templateUrl: './combobox-attribute.component.html',
  styleUrls: ['./input-attribute.scss']
})
export class ComboboxAttributeComponent {

  @Input() attribute: Attribute;
  @Input() form: FormGroup;

}
