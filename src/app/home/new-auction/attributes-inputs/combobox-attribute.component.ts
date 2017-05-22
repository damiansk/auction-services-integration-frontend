import { Component, Input } from '@angular/core';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-combobox',
  templateUrl: './combobox-attribute.component.html'
})
export class ComboboxAttributeComponent {

  @Input() attribute: Attribute;

}
