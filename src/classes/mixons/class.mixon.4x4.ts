import {Constructor} from './class.mixon.towpackage'

//is 4x4:boolean? = true, if 4x4 and regular false? well, doesn't need to be false. If it doesn't exist.
// is 4x4 is in? like a mode? = bool
// function that switches. if this.in4x4 == true, switch, if this isn't, switch backk.
//one mixon 3 properties


export function add4x4<TBase extends Constructor>(Truck: TBase) {
    return class vehicleWith4x4 extends Truck {
        isA4x4Vehicle:boolean = true;
        isIN4x4:boolean = false
        toggle4x4(){
            if(this.isIN4x4 == false){
                this.isIN4x4 = true;
            }
            else { 
                this.isIN4x4 = false;
            }

        }
    };
  }