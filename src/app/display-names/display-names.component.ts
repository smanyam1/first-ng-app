import { Component } from "@angular/core";
import { DisplayNamesService } from "./display-names.service";



@Component({
   selector: 'app-display-names',
   templateUrl:'./display-names.component.html'
}

)
export class DisplayNamesComponent {
    names;

    constructor(private service: DisplayNamesService){
            this.names= service.getNames();
    }


}