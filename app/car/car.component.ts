import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../dataService/data.Service";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

 
@Component({
    selector: "car",
    templateUrl: "./car/car.component.html",
})
export class CarComponent implements OnInit {
 
    public car: any; 
 
    public constructor(private location: Location, private route: ActivatedRoute, private data: DataService) {
        this.car = {}; 
    }
  
    onPickerLoadedInsurance(dateInsurance: DatePicker) {
        dateInsurance.year = 2010;
        dateInsurance.month = 2;
        dateInsurance.day = 9;
        dateInsurance.minDate = new Date(2010, 0, 29);
        dateInsurance.maxDate = new Date(2045, 4, 12);
    }


    onPickerLoadedOverview(dateOverview: DatePicker) {
        dateOverview.year = 2010;
        dateOverview.month = 2; 
        dateOverview.day = 9; 
        dateOverview.minDate = new Date(2010, 0, 29); 
        dateOverview.maxDate = new Date(2045, 4, 12);
    }
   
    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.car = this.data.getCar(params["id"]); 
        }); 
    }
  
    public cancel() {
        this.location.back();
    }
 
    public save(id: number , plates: string , course: string , description: string , users_id: string) {
        if(plates != "") {
            this.data.edit(id, plates , course , description , users_id);
            this.location.back(); 
        }
    }
}