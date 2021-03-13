import { IVehicle } from "../interfaces/vehicle_interface";
import {VehicleMake} from "../interfaces/vehicle_interface"

export class Vehicle implements IVehicle {
    
    make:VehicleMake;
    model: string;
    year: number;
    age: number;

}
