import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { DbServiceService } from '../../utils/servicesJsons/db-service.service';
import { Property } from '../../../features/properties/interfaces/property';
import { CardInformationComponent } from '../../components/card-information/card-information.component';
import { ExplorerSeccionComponent } from '../../components/explorer-seccion/explorer-seccion.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MainSectionComponent,CardInformationComponent,ExplorerSeccionComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  propertis: Property[] =[];

  constructor(private dbService:DbServiceService){}


  getAllDepartaments():Property[]{
    return this.dbService.getAllDepartaments();
  }
  getAllBuildings():Property[]{
    return this.dbService.getAllBuildings();
  }

}
