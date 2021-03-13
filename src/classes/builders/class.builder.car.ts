import {Vehicle} from '../class.vehicle'
import {VehicleMake} from '../../interfaces/vehicle_interface'


export class Car extends Vehicle {
    
    constructor(make: VehicleMake, model:string, year:number, age:number){
        super()
        this.make = make; // make.
        this.model = model;
        this.year = year;
        this.age = age;
    }

    theAge():number{

        return this.age;
    }

}



export class CarBuilder extends Vehicle{

    
    carBuilderInstance:CarBuilder|null
    private newCar = Car;
//oh... the names and stuff probably need to be set somewhere ..... O_O O_O or another mixon



    get theNewCar(){
        if(this.carBuilderInstance == null){
            return new this.newCar(this.make, this.model, this.year, this.age)
        }

        return this.newCar
    }

    setStats(make: VehicleMake, model:string, year:number, age:number){
        this.make = make; // make.
        this.model = model;
        this.year = year;
        this.age = age;

    }
}