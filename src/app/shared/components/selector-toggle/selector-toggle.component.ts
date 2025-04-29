import { Component, EventEmitter, output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PropertiCarrucelServiceService } from '../../../features/properties/services/properti-carrucel-service.service';

@Component({
  selector: 'app-selector-toggle',
  imports: [ButtonComponent],
  templateUrl: './selector-toggle.component.html',
  styleUrl: './selector-toggle.component.scss'
})
export class SelectorToggleComponent {
  selected: 'comprar' | 'alquilar' = 'alquilar';
 
  constructor(private propertiCarrucelService: PropertiCarrucelServiceService) {}
  select(option: 'comprar' | 'alquilar') {
    this.selected = option;
    this.propertiCarrucelService.setTypeOfBusiness(option); 
  }
}
