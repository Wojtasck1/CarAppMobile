import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TableComponent } from "./table/table.component";
import { AppRoutingModule } from "./app.routing";
import { CarComponent } from "./car/car.component";

// import { HttpComponent } from './http/http.component'; 
// import { HttpCarService } from './http/http-car.service'; 


import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CarComponent 
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
