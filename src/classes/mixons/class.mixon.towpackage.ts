export type Constructor = new (...args: any[]) => {};



//tow limiter mixon. Meaning tow limit weight? I assume in KG. So just a mixon that adds TowLimit, Units, 'kg'

export function addTowPackage<TBase extends Constructor>(Truck: TBase, limit:number,) {
    return class vehicleWithTowPackage extends Truck {
            towLimitWeight:number = limit;
            units: string =  'Kg';
        }
    };
