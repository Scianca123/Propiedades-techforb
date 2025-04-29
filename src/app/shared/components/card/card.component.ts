import { Component, input } from '@angular/core';
import { Property } from '../../../features/properties/interfaces/property';
import { Department } from '../../../features/properties/interfaces/department';
import { Building } from '../../../features/properties/interfaces/building';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  property=input.required<Property>();
 

 
}
