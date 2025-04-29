import { Component, input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-pop-up',
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  disabled= input.required<boolean>();
  constructor(private authService: AuthService){}
  onOverlayClick(): void {
    this.authService.closePopUp(); 
  }
}
