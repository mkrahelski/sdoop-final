import { IVehicle } from "../interfaces/vehicle_interface";
import {VehicleMake} from "../interfaces/vehicle_interface"

class Vehicle implements IVehicle {
    
    make: typeof VehicleMake;
    //{ FORD: string; CHEVROLET: string; SUBARU: string; NISSAN: string; }
    model: string;
    year: number;
    age: number;


    get theAge():number{

        return this.age;
    }


}