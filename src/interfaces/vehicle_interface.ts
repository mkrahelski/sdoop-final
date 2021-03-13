//vehicle -->method get age.

export const VehicleMake = {

    FORD : 'FORD',
    CHEVROLET : 'CHEVROLET',
    SUBARU : 'SUBARU',
    NISSAN : 'NISSAN',
    //could be turned to numbers for switches
}





export interface IVehicle{


    make: typeof VehicleMake; //one of the types I assume. in string form or in previous form, (assumption)
    model:string;
    year:number;
    age:number;



}