import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TableComponent } from "./table/table.component";
import { HttpComponent } from './http/http.component'; 


import { AppComponent } from "./app.component";


@NgModule({
  declarations: [AppComponent,TableComponent,HttpComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
