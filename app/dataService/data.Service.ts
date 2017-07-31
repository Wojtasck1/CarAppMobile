import { Injectable } from "@angular/core";
import { Car } from "../domain/car";

@Injectable()
export class DataService { 

      private cars: Array<any>;

      public constructor() {
        this.cars = [
            {
                "id": 1,
                "plates": "TKIYU32",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 1,         
                "last_oil_change": 150000
            },
            {
                "id": 2,
                "plates": "TK9528L",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 2,  
                "last_oil_change": 150000
            },
            {
                "id": 3,
                "plates": "TK1434N",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 3,
                "last_oil_change": 150000  
            },
            {
                "id": 4,
                "plates": "TK8740M",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 4,  
                "last_oil_change": 150000 
            },
            { 
                "id": 5,
                "plates": "TK3740H", 
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 5, 
                "last_oil_change": 150000 
            },
            {
                "id": 6,
                "plates": "TK9242J",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 6,  
                "last_oil_change": 150000
            },
            {
                "id": 7,
                "plates": "TK3619R",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 7,  
                "last_oil_change": 150000
            },
            {
                "id": 8,
                "plates": "TKI 04544",
                "overview": "2017-07-14 19:43:37 +0100",
                "insurance": "2017-08-14 19:43:37 +0100",
                "course": "150000",
                "description":"samochod sprawny",
                "users_id": 8,  
                "last_oil_change": 150000
            }

        ];
    }

 
     public getCars(): Array<any> {
        return this.cars;
    }
 
    public getCar(id: number): any {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].id == id) { 
                return this.cars[i];
            }
        }
        return -1;
    }
 
    public delete(id: number) {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].id == id) {
                this.cars.splice(i, 1);
                break;
            } 
        }
    }
 
    public add(value: string) {
        this.cars.push(
            {
                "id": Math.floor(Math.random() * (100 - 1)) + 1,
                "name": value
            }
        );
    }
  
    public edit(id: number , plates: string , course: string , description: string , users_id: string) { 
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].id == id) {
                this.cars[i].plates = plates;
                this.cars[i].course = course;
                this.cars[i].description = description;
                this.cars[i].users_id = users_id;
                break; 
            }
        } 
    }

} 