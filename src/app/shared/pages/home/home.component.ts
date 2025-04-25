import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MainSectionComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
