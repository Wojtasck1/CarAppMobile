import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CarService } from "../dataService/data.Service";
 
@Component({
    selector: "car",
    templateUrl: "./car/car.component.html",
})
export class CarComponent implements OnInit {
 
    public car: any; 
 
    public constructor(private location: Location, private route: ActivatedRoute, private data: CarService) {
        this.car = {};
    }
  
    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.car = this.data.getCar(params["id"]);
        });
    }
 
    public cancel() {
        this.location.back();
    }
 
    public save(id: number, name: string) {
        if(name != "") {
            this.data.edit(id, name);
            this.location.back();
        }
    }
 
}