import { Component } from '@angular/core';
import { SelectorToggleComponent } from '../selector-toggle/selector-toggle.component';
import { SearchFiltersPanelComponent } from '../search-filters-panel/search-filters-panel.component';

@Component({
  selector: 'app-main-section',
  imports: [SelectorToggleComponent,SearchFiltersPanelComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
