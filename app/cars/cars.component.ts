import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CarService } from "../dataService/data.Service";

@Component({
    selector: "cars",
    templateUrl: "./cars/cars.component.html",
}) 
export class CarsComponent {
 
    public cars: Array<any>; 
 
    public constructor(private router: Router, private data: CarService) {
        this.cars = this.data.getCars();
    }
 
    public add(value: string) {
        if(value != "") {
            this.data.add(value);
        }
    }
 
    public remove(id: number) {
        this.data.delete(id);
    }
 
    public edit(id: number) {
        this.router.navigate(["/car", id]);
    }
 
}