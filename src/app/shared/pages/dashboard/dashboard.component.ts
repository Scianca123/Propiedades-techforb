import { Component } from '@angular/core';
import { DashboardHeaderComponent } from "../../components/dashboard-header/dashboard-header.component";
import { MainContentComponent } from "../../components/main-content/main-content.component";
import { DashboarFooterComponent } from "../../components/dashboar-footer/dashboar-footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardHeaderComponent, MainContentComponent, DashboarFooterComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
