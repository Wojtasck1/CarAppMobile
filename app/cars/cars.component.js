"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_Service_1 = require("../dataService/data.Service");
var CarsComponent = (function () {
    function CarsComponent(router, data) {
        this.router = router;
        this.data = data;
        this.cars = this.data.getCars();
    }
    CarsComponent.prototype.add = function (value) {
        if (value != "") {
            this.data.add(value);
        }
    };
    CarsComponent.prototype.remove = function (id) {
        this.data.delete(id);
    };
    CarsComponent.prototype.edit = function (id) {
        this.router.navigate(["/car", id]);
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: "cars",
        templateUrl: "./cars/cars.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, data_Service_1.CarService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsNERBQXlEO0FBTXpELElBQWEsYUFBYTtJQUl0Qix1QkFBMkIsTUFBYyxFQUFVLElBQWdCO1FBQXhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEtBQWE7UUFDcEIsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSw0QkFBSSxHQUFYLFVBQVksRUFBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQUtxQyxlQUFNLEVBQWdCLHlCQUFVO0dBSjFELGFBQWEsQ0FzQnpCO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDYXJTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL2RhdGEuU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbsKgwqDCoMKgc2VsZWN0b3I6IFwiY2Fyc1wiLFxyXG7CoMKgwqDCoHRlbXBsYXRlVXJsOiBcIi4vY2Fycy9jYXJzLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pIFxyXG5leHBvcnQgY2xhc3MgQ2Fyc0NvbXBvbmVudCB7XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGNhcnM6IEFycmF5PGFueT47IFxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGE6IENhclNlcnZpY2UpIHtcclxuwqDCoMKgwqDCoMKgwqDCoHRoaXMuY2FycyA9IHRoaXMuZGF0YS5nZXRDYXJzKCk7XHJcbsKgwqDCoMKgfVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBhZGQodmFsdWU6IHN0cmluZykge1xyXG7CoMKgwqDCoMKgwqDCoMKgaWYodmFsdWUgIT0gXCJcIikge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmRhdGEuYWRkKHZhbHVlKTtcclxuwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqB9XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIHJlbW92ZShpZDogbnVtYmVyKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLmRhdGEuZGVsZXRlKGlkKTtcclxuwqDCoMKgwqB9XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGVkaXQoaWQ6IG51bWJlcikge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhclwiLCBpZF0pO1xyXG7CoMKgwqDCoH1cclxuwqBcclxufSJdfQ==