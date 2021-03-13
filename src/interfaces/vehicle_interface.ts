//vehicle -->method get age.

export enum VehicleMake {

    DEFAULT = '',
    FORD = 'Ford',
    CHEVROLET = 'Chevy',
    SUBARU = 'Subaru',
    NISSAN ='Ford',
    //could be turned to numbers for switches
}




export interface IVehicle{


    make:VehicleMake; //one of the types I assume. in string form or in previous form, (assumption)
    model:string;
    year:number;
    age:number;
}