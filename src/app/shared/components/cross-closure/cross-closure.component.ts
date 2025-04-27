import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cross-closure',
  imports: [],
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
