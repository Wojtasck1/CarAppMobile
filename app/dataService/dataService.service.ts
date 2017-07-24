import { Component } from "@angular/core";
import { Car } from "../domain/car";

@Component({ 
  selector: "dataService-compnent",
  templateUrl: "./dataService/dataService.component.html",
})  

export class DataServiceComponent {

//  cars: Car[];
  errorString: string; 

   private cars: Array<Car>;
 
    public constructor() {
        // this.cars = [
        //     {
        //         "carId": 1,
        //         "plates": "TKI997",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America", 
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"

        //     },
        //     {
        //         "carId": 2,
        //         "plates": "TKI998",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 3,
        //         "plates": "TKI999",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1, 
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 4,
        //         "plates": "TKI910",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 5,
        //         "plates": "TKI911",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     }
        // ];
    }
 
    public getcCars(): Array<any> {
        return this.cars;
    }
 
    public getCars(carId: number): any {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].carId == carId) {
                return this.cars[i];
            }
        }
        return -1;
    }
 
    public delete(carId: number) {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].carId == carId) {
                this.cars.splice(i, 1);
                break;
            }
        }
    }
 
    public add(value: string) {
        this.cars.push(
            
              // "carId": Math.floor(Math.random() * (100 - 1)) + 1,
              // "plates": value

  //              "id": Math.floor(Math.random() * (100 - 1)) + 1,
  //              "name": value
            
        );
    }
 
    public edit(id: number, plates: string) {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].carId == id) {
                this.cars[i].plates = plates;
                break;
            }
        }
    }

} 