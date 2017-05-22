import { Component, Input } from '@angular/core';

import { Attribute } from '../attribute-interface';

@Component({
  selector: 'attr-text',
  templateUrl: './text-attribute.component.html',
  styleUrls: ['./input-attribute.scss']
})
export class TextAttributeComponent {

  @Input() attribute: Attribute;

}
