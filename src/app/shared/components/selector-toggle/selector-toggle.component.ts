import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-selector-toggle',
  imports: [ButtonComponent],
  templateUrl: './selector-toggle.component.html',
  styleUrl: './selector-toggle.component.scss'
})
export class SelectorToggleComponent {
  selected: 'comprar' | 'alquilar' = 'alquilar';

  select(option: 'comprar' | 'alquilar') {
    this.selected = option;
  }
}
