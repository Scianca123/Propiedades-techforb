import { Component } from '@angular/core';
import { CardAnalyticsComponent } from "../card-analytics/card-analytics.component";
import { ChartComponent } from "../chart/chart.component";

@Component({
  selector: 'app-seccion-analytics',
  imports: [CardAnalyticsComponent, ChartComponent],
  templateUrl: './seccion-analytics.component.html',
  styleUrl: './seccion-analytics.component.scss'
})
export class SeccionAnalyticsComponent {

}
