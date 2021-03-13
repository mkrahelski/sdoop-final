import {Truck, TruckBuilder} from '../builders/class.builder.truck'
import {Car, CarBuilder} from '../builders/class.builder.car'
import {VehicleMake} from '../../interfaces/vehicle_interface'


//should it implement vehicle? Or maybe the builders should :| probably the builders.
//Add properties to vehicle. I assume we can build on top eventually.g

export class VehicleDirector {


    makeFordF150XLT(){
        const builder = new TruckBuilder();
        builder.add4x4()
        builder.addTowPackage(2500)
        builder.setStats(VehicleMake.FORD, "XLT", 2009, 0)
        return builder.theNewTruck
    }

    makeFordTaurus(){
        const builder = new CarBuilder();
        builder.setStats(VehicleMake.FORD, "Taurus", 2004, 16)
        return builder.theNewCar;
    }

    makeFordRanger(){
        const builder = new TruckBuilder();
        builder.add4x4()
        builder.setStats(VehicleMake.FORD, "Raptor", 2016, 2)
        return builder.theNewTruck
    }

    makeFordF150(){
        const builder = new TruckBuilder();
        builder.addTowPackage(2000)
        builder.setStats(VehicleMake.FORD, "150", 2008, 12)    
        return builder.theNewTruck
    }

}


// const vicDirector = new VehicleDirector
// VehicleDirector.Makevehice(whatever it maybe :)