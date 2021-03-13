import { expect } from "chai";
import "mocha";
import { Car } from "../src/classes/builders/class.builder.car";
import { Truck } from "../src/classes/builders/class.builder.truck";

import {VehicleDirector} from '../src/classes/directors/class.vic_director'


describe("Director", () => {

    const newFactory = new VehicleDirector();
    const newF150 = newFactory.makeFordF150();
    const newF150XLT = newFactory.makeFordF150XLT();
    const newRanger = newFactory.makeFordRanger();
    const newTaurus = newFactory.makeFordTaurus();



    it("Should be able to create an instance of a director", () => {
        expect(newFactory).to.be.instanceOf(VehicleDirector);
    });

    it("Ford newF150XLT", () => {
        expect(newF150XLT).to.be.instanceOf(Truck)

    });
    it("Ford f150", () => {
        expect(newF150).to.be.instanceOf(Truck)

    });
    it("Ford Taurus", () => {
        expect(newTaurus).to.be.instanceOf(Car)
    });
    it("Ford Ranger", () => {
        expect(newRanger).to.be.instanceOf(Truck)

    });

});


