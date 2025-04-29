import { Component } from '@angular/core';
import { SelectorToggleComponent } from '../selector-toggle/selector-toggle.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-filters-panel',
  imports: [SelectorToggleComponent,ButtonComponent],
  templateUrl: './search-filters-panel.component.html',
  styleUrl: './search-filters-panel.component.scss'
})
export class SearchFiltersPanelComponent {

}
