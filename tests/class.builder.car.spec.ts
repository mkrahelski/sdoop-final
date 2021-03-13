import "mocha";
import { expect } from "chai";
import {TruckBuilder, Truck} from '../src/classes/builders/class.builder.truck'
import { VehicleMake } from "../src/interfaces/vehicle_interface";

describe("Builder Car", () => {
    
        const factorX = new TruckBuilder()
        factorX.add4x4();
        factorX.addTowPackage(2500);
        factorX.setStats(VehicleMake.NISSAN, "featherweight", 2012, 4)

        const xTruck = factorX.theNewTruck
    
    
    it("A truck to be built. By a created builder!", () => {
       
        expect(factorX).to.be.instanceOf(TruckBuilder);
        expect(xTruck).to.be.instanceOf(Truck)
        expect(xTruck).to.be.eql({
            make: 'Ford',
            model: 'featherweight',
            year: 2012,
            age: 4,
            isA4x4Vehicle: true,
            isIN4x4: false,
            towLimitWeight: 2500,
            units: 'Kg'
          })
    it('Should be able to change 4x4', ()=>{
        //not sure why but I can't acess the methods that should have been added via mixon.
        //same problem with the age😐
    })


    });

});
