import { Component, output } from '@angular/core';
import { CrossClosureComponent } from '../cross-closure/cross-closure.component';

@Component({
  selector: 'app-form-login',
  imports: [CrossClosureComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  changeContent= output<'login'|'loginGoogle'>();

  onGoogleLogin(): void {
    this.changeContent.emit('loginGoogle'); // Cambia a la pantalla de iniciar sesión con Google
  }
}
