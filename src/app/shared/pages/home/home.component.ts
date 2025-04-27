import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainSectionComponent } from '../../components/main-section/main-section.component';
import { DbServiceService } from '../../utils/servicesJsons/db-service.service';
import { Property } from '../../../features/properties/interfaces/property';
import { CardInformationComponent } from '../../components/card-information/card-information.component';
import { ExplorerSeccionComponent } from '../../components/explorer-seccion/explorer-seccion.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MainSectionComponent,CardInformationComponent,ExplorerSeccionComponent,FooterComponent,PopUpComponent,FormLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  propertis: Property[] =[];
  isPopUpVisible: boolean = false;
  popUpContent: 'login'|'loginGoogle' = 'login';
  constructor(private dbService:DbServiceService,private authService: AuthService){}

  ngOnInit(): void {
    this.authService.popUpState$.subscribe((state) => {
      this.isPopUpVisible = state; 
    });
    this.authService.popUpContentState$.subscribe((content) => {
      this.popUpContent = content;
    });
  }
  getAllDepartaments():Property[]{
    return this.dbService.getAllDepartaments();
  }
  getAllBuildings():Property[]{
    return this.dbService.getAllBuildings();
  }
  onChangePopUpContent(content: 'login'|'loginGoogle'): void {
    this.authService.setPopUpContent(content); // Actualiza el contenido del pop-up
  }
}
