import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cross-closure',
  imports: [ButtonComponent],
  templateUrl: './cross-closure.component.html',
  styleUrl: './cross-closure.component.scss'
})
export class CrossClosureComponent {

  constructor(private authService: AuthService) {

   }

  onCroosClick(): void {
    this.authService.closePopUp(); 
  }
}
