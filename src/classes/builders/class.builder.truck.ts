import {Vehicle} from '../class.vehicle'
import {add4x4} from '../mixons/class.mixon.4x4'
import {addTowPackage} from '../mixons/class.mixon.towpackage'
import {VehicleMake} from '../../interfaces/vehicle_interface'


export class Truck extends Vehicle {



    constructor(make: VehicleMake, model:string, year:number, age:number){
        super()
        this.make = make; // make.
        this.model = model;
        this.year = year;
        this.age = age;
    }

    get theAge():number{

        return this.age;
    }


}



export class TruckBuilder extends Vehicle{

    truckBuilderInstance:TruckBuilder|null
    private newTruck = Truck;

get theNewTruck(){
    if(this.truckBuilderInstance == null){       
        return new this.newTruck(this.make, this.model, this.year, this.age)
    }

    return this.newTruck
}


    setStats(make: VehicleMake, model:string, year:number, age:number){
        this.make = make; // make.
        this.model = model;
        this.year = year;
        this.age = age;
    
    }

    add4x4(){
        this.newTruck = add4x4(this.newTruck);
    }

    addTowPackage(weightLimit:number){
        this.newTruck = addTowPackage(this.newTruck, weightLimit);
    }

    get theAge():number{

        return this.age;
    }


}


