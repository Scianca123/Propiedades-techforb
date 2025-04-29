import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-total-data',
  imports: [],
  templateUrl: './card-total-data.component.html',
  styleUrl: './card-total-data.component.scss'
})
export class CardTotalDataComponent {
  titleData=input.required<string>();
  valueData=input.required<string>();
  iconData=input.required<string>();
}
