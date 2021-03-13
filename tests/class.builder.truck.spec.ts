import "mocha";
import { expect } from "chai";
import {CarBuilder, Car} from '../src/classes/builders/class.builder.car'
import { VehicleMake } from "../src/interfaces/vehicle_interface";

describe("Car Builder", () => {

    const factorX = new CarBuilder()
    factorX.setStats(VehicleMake.SUBARU, "superlightweight", 2015, 0)

    const xCar = factorX.theNewCar



    it('Makes Cars', () =>{


        expect(factorX).to.be.instanceOf(CarBuilder);
        expect(xCar).to.be.instanceOf(Car)
        expect(xCar).to.be.eql({ make: 'Subaru', model: 'superlightweight', year: 2015, age: 0 })

    }) 

    it('Its confusing that I cant get the age of the car made by a builder.', () => {
        const testX = new Car(VehicleMake.SUBARU, "Bolt", 1245, 222);


        expect(testX.theAge()).to.be.eq(222);

    })


});
