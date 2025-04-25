import { Component, input } from '@angular/core';
import { DotspagerComponent } from '../dotspager/dotspager.component';
import { CardComponent } from '../card/card.component';
import { Property } from '../../../features/properties/interfaces/property';

@Component({
  selector: 'app-carousel',
  imports: [DotspagerComponent,CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    properties=input.required<Property[]>();

}
