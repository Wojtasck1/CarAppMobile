import { Component } from "@angular/core";
import { Car } from "../domain/car";
// import { HttpCarService } from "../http/http-car.service";

@Component({ 
  selector: "tab-compnent",
  templateUrl: "./table/table.component.html",

})  

export class TableComponent {

  cars: Car[];
  errorString: string;  


//   public getCars(){
//   this.httpCarService.getCars().subscribe(
//     cars => this.cars = cars,
//     error => this.errorString = <any> error
//   );
// }

//   constructor(protected httpCarService : HttpCarService){

//     this.getCars;
//     console.log(this.getCars);

//   }
} 