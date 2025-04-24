import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainSectionComponent } from './shared/components/main-section/main-section.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,MainSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Propiedades-techforb';
}
