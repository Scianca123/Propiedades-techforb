import { Component, output } from '@angular/core';
import { CrossClosureComponent } from '../cross-closure/cross-closure.component';
import { ButtonComponent } from "../button/button.component";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-form-login',
  imports: [CrossClosureComponent, ButtonComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  
  changeContent:string = 'login';
  get changeContentValue(): string {
    return this.changeContent;
  }

  constructor(private authService: AuthService) {
    this.authService.popUpState$.subscribe((state) => {
      if(state){
        this.changeContent = 'login'; 
      }
    });
   }
  onGoogleLogin(): void {
   
    this.changeContent='loginGoogle'; // Cambia a la pantalla de iniciar sesión con Google
    console.log(this.changeContent);
  }
}
