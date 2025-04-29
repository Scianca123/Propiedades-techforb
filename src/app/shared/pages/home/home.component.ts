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
import { PropertiCarrucelServiceService } from '../../../features/properties/services/properti-carrucel-service.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,MainSectionComponent,CardInformationComponent,ExplorerSeccionComponent,FooterComponent,PopUpComponent,FormLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  departaments: Property[] =[];
  buildings: Property[] =[];
  isPopUpVisible: boolean = false;
  popUpContent: 'login'|'loginGoogle' = 'login';
  typeOfBusiness: 'comprar' | 'alquilar' = 'alquilar'; 
  constructor(private dbService:DbServiceService,private authService: AuthService,private propertiCarrucelService: PropertiCarrucelServiceService){}

  ngOnInit(): void {
    this.departaments=this.dbService.getAllDepartaments(this.typeOfBusiness)
    this.authService.popUpState$.subscribe((state) => {
      this.isPopUpVisible = state; 
    });
    this.authService.popUpContentState$.subscribe((content) => {
      this.popUpContent = content;
    });
    this.propertiCarrucelService.typeOfBusiness$.subscribe((type) => {
      this.typeOfBusiness = type;
      this.updateProperties();
    });
    
  }
  updateProperties(): void {
    this.departaments = this.dbService.getAllDepartaments(this.typeOfBusiness);
    this.buildings = this.dbService.getAllBuildings(this.typeOfBusiness);
  }
  
  onChangePopUpContent(content: 'login'|'loginGoogle'): void {
    this.authService.setPopUpContent(content); // Actualiza el contenido del pop-up
  }
}
