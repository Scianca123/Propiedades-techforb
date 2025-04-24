import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /** Tamaño del botón */
  size = input<'small' | 'medium' | 'large'>();
  /** Variante del botón */
  variant = input<'primary' | 'secondary'| 'terciario' >();
  teme= input<'dark'|'light'|'of'>();
  disabled = input<boolean>(false);
  clicked= output<void>();


  onClick() {
  if (!this.disabled) {
    this.clicked.emit();
    
  }
  }
}
