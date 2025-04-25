import { Injectable } from '@angular/core';
import{Property} from '../../../features/properties/interfaces/property';
import{Department} from '../../../features/properties/interfaces/department';
import { Building } from '../../../features/properties/interfaces/building';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  propertis: (Property | Department|Building)[] =[];
  constructor() { 
   this.propertis=[
    {
    id:1,
    titulo:'Departament',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:2,
    titulo:'Departament',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:3,
    titulo:'Departament',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:4,
    titulo:'Departament',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:5,
    titulo:'Departament',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:6,
    titulo:'Departament',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:7,
    titulo:'Departament',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:8,
    titulo:'Departament',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:9,
    titulo:'Departament',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:10,
    titulo:'Departament',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2
  }as Department,{
    id:11,
    titulo:'Building',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:12,
    titulo:'Building',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:13,
    titulo:'Building',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:14,
    titulo:'Building',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:15,
    titulo:'Building',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' ,
    numberOfDepartaments:2
  }as Building,{
    id:16,
    titulo:'Building',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:17,
    titulo:'Building',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:18,
    titulo:'Building',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:19,
    titulo:'Building',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
  }as Building,{
    id:20,
    titulo:'Building',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    numberOfDepartaments:2
}as Building]
  }

  getAllProperties(): (Property | Department|Building)[] {
    return this.propertis;
  }
  getPropertyById(id: number): Property | Department|Building | undefined {
    return this.propertis.find(property => property.id === id);
  }
  getAllDepartaments(){
    return this.propertis.filter((property:Property|Department|Building) => 'numberOfBedrooms' in property && 'numberOfBathroomsNumber' in property);
  }
}
