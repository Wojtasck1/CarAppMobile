import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TableComponent } from "./table/table.component";
import { AppRoutingModule } from "./app.routing";
import { CarsComponent } from "./cars/cars.component";
import { CarComponent } from "./car/car.component";
import { DataService } from "./dataService/data.Service";

import { AppComponent } from "./app.component";
 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent, 
    CarsComponent,
    CarComponent
  ], 
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
