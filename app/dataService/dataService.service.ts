import { Component } from "@angular/core";
import { Car } from "../domain/car";

@Component({ 
  selector: "dataService-compnent",
  templateUrl: "./dataService/dataService.component.html",

})  

export class DataServiceComponent {

  cars: Car[];
  errorString: string;  

} 