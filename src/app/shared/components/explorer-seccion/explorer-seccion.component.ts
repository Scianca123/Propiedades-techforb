import { Component, input } from '@angular/core';
import { Property } from '../../../features/properties/interfaces/property';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-explorer-seccion',
  imports: [CarouselComponent],
  templateUrl: './explorer-seccion.component.html',
  styleUrl: './explorer-seccion.component.scss'
})
export class ExplorerSeccionComponent {
    propertis=input.required<Property[]>();
    title=input.required<string>();
    label=input.required<string>();
}
