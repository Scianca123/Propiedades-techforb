import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-dashboard-header',
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  iconUser:string="";
  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.authService.userIcon$.subscribe((icon) => {
      this.iconUser = icon;
    });
  }
  
  

}
