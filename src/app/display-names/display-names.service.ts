import { Injectable } from '@angular/core';

@Injectable()
export class DisplayNamesService {
    disnames = ["name1", "name2", "name3","name4"];

    getNames(){
       return  this.disnames;
    }
}