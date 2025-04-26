export interface Property {
    id:number;
    titulo:string;
    squareMeters:number;
    location:string;
    state:'En construccion'|'Terminado';
    price:number;
    img:string;
    numberOfBedrooms:number|undefined;
    numberOfBathroomsNumber:number|undefined;
    numberOfDepartaments:number |undefined;
}
