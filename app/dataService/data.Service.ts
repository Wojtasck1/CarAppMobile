import { Injectable } from "@angular/core";
import { Car } from "../domain/car";

@Injectable()
export class CarService { 

      private cars: Array<any>;

      public constructor() {
        this.cars = [
            {
                "id": 1,
                "name": "TKIYU32"
            },
            {
                "id": 2,
                "name": "TK9528L"
            },
            {
                "id": 3,
                "name": "TK1434N"
            },
            {
                "id": 4,
                "name": "TK8740M"
            },
            {
                "id": 5,
                "name": "TK3740H"
            },
            {
                "id": 6,
                "name": "TK9242J"
            },
            {
                "id": 7,
                "name": "TK3619R"
            },
            {
                "id": 8,
                "name": "TKI 04544"
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
 
    public edit(id: number, name: string) {
        for(let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].id == id) {
                this.cars[i].name = name;
                break;
            }
        }
    }

} 