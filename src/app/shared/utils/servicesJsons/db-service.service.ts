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
    titulo:'Departament1',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:2,
    titulo:'Departament2',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:3,
    titulo:'Departament3',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:4,
    titulo:'Departament4',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:5,
    titulo:'Departament5',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:6,
    titulo:'Departament6',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:7,
    titulo:'Departament7',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:8,
    titulo:'Departament8',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'comprar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:9,
    titulo:'Departament9',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'comprar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:10,
    titulo:'Departament10',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'comprar',
    numberOfBedrooms:4,
    numberOfBathroomsNumber:2,
    numberOfDepartaments:undefined
  }as Property,{
    id:11,
    titulo:'Building1',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:12,
    titulo:'Building2',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:13,
    titulo:'Building3',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:14,
    titulo:'Building4',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:15,
    titulo:'Building5',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60' ,
    typeOfBusiness:'comprar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:16,
    titulo:'Building6',
    squareMeters:120,
    location:'Playa del Carmen',
    state:'En construccion',
    price:200000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:17,
    titulo:'Building7',
    squareMeters:150,
    location:'Tepoztlán',
    state:'En construccion',
    price:300000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:18,
    titulo:'Building8',
    squareMeters:200,
    location:'Valle de Bravo',
    state:'En construccion',
    price:400000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:19,
    titulo:'Building9',
    squareMeters:100,
    location:'CDMX',
    state:'En construccion',
    price:500000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property,{
    id:20,
    titulo:'Building10',
    squareMeters:250,
    location:'Querétaro',
    state:'En construccion',
    price:600000,
    img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    typeOfBusiness:'alquilar',
    numberOfDepartaments:2,
    numberOfBedrooms:undefined,
    numberOfBathroomsNumber:undefined
  }as Property]
  }

  getAllProperties(): (Property | Department|Building)[] {
    return this.propertis;
  }
  getPropertyById(id: number): Property | Department|Building | undefined {
    return this.propertis.find(property => property.id === id);
  }
  getAllDepartaments(typeOfBusiness?:'alquilar'|'comprar'){
    if(typeOfBusiness!=undefined){
      return this.propertis.filter((property:Property|Department|Building) => property.numberOfBedrooms!==undefined && property.numberOfBathroomsNumber!=undefined && property.typeOfBusiness==typeOfBusiness) as Property[];
    }
    return this.propertis.filter((property:Property|Department|Building) => property.numberOfBedrooms!==undefined && property.numberOfBathroomsNumber!=undefined ) as Property[];
  }
  getAllBuildings(typeOfBusiness?:'alquilar'|'comprar'){
    if(typeOfBusiness!=undefined){
      return this.propertis.filter((property:Property|Department|Building) => property.numberOfDepartaments!==undefined && property.typeOfBusiness==typeOfBusiness) as Property[];
    }
    return this.propertis.filter((property:Property|Department|Building) => property.numberOfDepartaments!==undefined ) as Property[];
  }
}
