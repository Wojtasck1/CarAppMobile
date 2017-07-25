import { Component } from "@angular/core";
import { Car } from "../domain/car";
import { Router } from "@angular/router";


@Component({  
  selector: "cars-compnent",
  templateUrl: "./cars/cars.component.html",  

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

} 