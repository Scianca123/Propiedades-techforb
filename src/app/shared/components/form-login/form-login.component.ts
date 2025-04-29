import { Component, output } from '@angular/core';
import { CrossClosureComponent } from '../cross-closure/cross-closure.component';
import { ButtonComponent } from "../button/button.component";
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { url } from 'inspector';
import { User } from '../../../features/auth/interfaces/user';

@Component({
  selector: 'app-form-login',
  imports: [CrossClosureComponent, ButtonComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  
  changeContent:string = 'login';
  accounts: User[] = [{
    name:'Agustin',
    email:'Agustin81@gmail.com',
    urlImg:'/assets/iconos/userIconExampleA.svg'
  },{
    name:'agustin',
    email:'agustin@gmail.com',
    urlImg:'/assets/iconos/userIconExampleM.svg'
  }];
  get changeContentValue(): string {
    return this.changeContent;
  }

  constructor(private authService: AuthService,private router: Router) {
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
  onUserLogin(): void {
    this.authService.login(); // Autentica al usuario
    this.router.navigate(['/dashboard']); // Redirige a la página protegida
    this.authService.closePopUp();
  }
}
