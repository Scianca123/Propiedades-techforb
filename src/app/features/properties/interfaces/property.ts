export interface Property {
    id:number;
    titulo:string;
    squareMeters:number;
    location:string;
    state:'En construccion'|'Terminado';
    price:number;
    img:string;
    typeOfBusiness:'alquilar'|'comprar';
    numberOfBedrooms:number|undefined;
    numberOfBathroomsNumber:number|undefined;
    numberOfDepartaments:number |undefined;
}
