import { Injectable, output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
}
