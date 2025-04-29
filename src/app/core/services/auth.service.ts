import { Injectable, output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedState = false; // Estado de autenticación

  private userIcon= new BehaviorSubject<string>("assets/iconos/userperfilExample.jpg"); 
  userIcon$ = this.userIcon.asObservable(); 
  private userName= new BehaviorSubject<string>('Agustin');
  userName$ = this.userName.asObservable();

  private popUpState = new BehaviorSubject<boolean>(false); 
  popUpState$ = this.popUpState.asObservable();
  private popUpContentState = new BehaviorSubject<'login'|'loginGoogle'>('login'); 
  popUpContentState$ = this.popUpContentState.asObservable();
  constructor() {}

  openPopUp(): void {
    this.popUpState.next(true); 
  }

  closePopUp(): void {
    this.popUpState.next(false); 
  }

  setPopUpContent(content: 'login'|'loginGoogle'): void {
    this.popUpContentState.next(content); // Cambia el contenido del pop-up
  }
  login(): void {
    this.isAuthenticatedState = true; // Marca al usuario como autenticado
  }

  logout(): void {
    this.isAuthenticatedState = false; // Marca al usuario como no autenticado
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedState; // Devuelve el estado de autenticación
  }
}
