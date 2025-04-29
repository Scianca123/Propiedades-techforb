import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-analytics',
  imports: [],
  templateUrl: './card-analytics.component.html',
  styleUrl: './card-analytics.component.scss'
})
export class CardAnalyticsComponent {
  title= input.required<string>();
  
}
