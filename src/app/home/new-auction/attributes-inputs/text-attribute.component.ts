import { Component, Input } from '@angular/core';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-text',
  templateUrl: './text-attribute.component.html'
})
export class TextAttributeComponent {

  @Input() attribute: Attribute;

}
