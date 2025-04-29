import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { SeccionTotalDataComponent } from "../seccion-total-data/seccion-total-data.component";

@Component({
  selector: 'app-main-content',
  imports: [SeccionTotalDataComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  userName:string="";

  constructor(private authService:AuthService){
   
  }
  ngOnInit() {
     this.authService.userName$.subscribe((name)=>{
      this.userName = name
    });
  }
}
