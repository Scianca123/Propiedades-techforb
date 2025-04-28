import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiCarrucelServiceService {
  private typeOfBusiness = new BehaviorSubject<'alquilar'|'comprar'>('alquilar'); 
  typeOfBusiness$ = this.typeOfBusiness.asObservable();
  constructor() { }

  setTypeOfBusiness(type: 'alquilar'|'comprar'): void {
    this.typeOfBusiness.next(type); 
  } 
} 
