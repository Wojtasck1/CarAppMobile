import { Component } from "@angular/core";
import { Car } from "../domain/car";

@Component({ 
  selector: "car-compnent",
  templateUrl: "./car/car.component.html", 

})  

export class CarsComponent {

  cars: Car[];
  errorString: string;   


  public items: any[] = [
    {title: 'NativeScript'},
    {title: 'Angular'},
    {title: 'TypeScript'},
    {title: 'JavaScript'}
  ]
 
  // constructor(private router: AppRoutingModule){

  // }
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