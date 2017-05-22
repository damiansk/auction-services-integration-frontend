import { Component, Input } from '@angular/core';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-text',
  templateUrl: './text-attribute.component.html',
  styleUrls: ['./input-attribute.sass']
})
export class TextAttributeComponent {

  @Input() attribute: Attribute;

}
