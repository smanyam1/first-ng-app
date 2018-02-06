import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayNamesComponent } from './display-names/display-names.component';
import { DisplayNamesService } from './display-names/display-names.service';
import { PracticeDemosComponent } from './practice-demos/practice-demos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayNamesComponent,
    PracticeDemosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DisplayNamesService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
