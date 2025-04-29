import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-information',
  imports: [],
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.scss'
})
export class CardInformationComponent {
  title=input.required<string>();
  description=input.required<string>();
  urlImage=input.required<string>();
}
