import { Component, output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  

  constructor(private authService: AuthService) {

  }
  
  onLoginClick(): void {
    this.authService.openPopUp(); 
  }
  

}
