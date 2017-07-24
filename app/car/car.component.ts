import { Component } from "@angular/core";
import { Car } from "../domain/car";
// import { HttpCarService } from "../http/http-car.service";

@Component({ 
  selector: "car-compnent",
  templateUrl: "./car/car.component.html",

})  

export class CarComponent {

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