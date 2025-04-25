import { Component, input } from '@angular/core';
import { Property } from '../../../features/properties/interfaces/property';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  property=input.required<Property>();
}
