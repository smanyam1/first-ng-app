import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-demos',
  template : `practice demos:
              <h2>{{ name }}</h2>
              <h2>{{ name  | uppercase }}</h2>
              <h2>{{ name  | lowercase }}</h2>
              <h2>{{ name  | slice :'2':'4' }}</h2>
              `
})
export class PracticeDemosComponent  {

    name = "Srujan";
  

}
