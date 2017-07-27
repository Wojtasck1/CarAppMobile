import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../dataService/data.Service";
import { DatePicker } from "ui/date-picker";

 
@Component({
    selector: "car",
    templateUrl: "./car/car.component.html",
})
export class CarComponent implements OnInit {
 
    public car: any; 
 
    public constructor(private location: Location, private route: ActivatedRoute, private data: DataService) {
        this.car = {}; 
    }

    onPickerLoaded(args) {
        let datePicker = <DatePicker>args.object;

        datePicker.year = 2015;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(2015, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
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
            this.data.edit(name,id);
            this.location.back(); 
        }
    }
}