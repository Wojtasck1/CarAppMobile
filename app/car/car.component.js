"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var data_Service_1 = require("../dataService/data.Service");
var CarComponent = (function () {
    function CarComponent(location, route, data) {
        this.location = location;
        this.route = route;
        this.data = data;
        this.car = {};
    }
    CarComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 2015;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(2015, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.car = _this.data.getCar(params["id"]);
        });
    };
    CarComponent.prototype.cancel = function () {
        this.location.back();
    };
    CarComponent.prototype.save = function (id, plates) {
        if (plates != "") {
            this.data.edit(plates, id);
            this.location.back();
        }
    };
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        selector: "car",
        templateUrl: "./car/car.component.html",
    }),
    __metadata("design:paramtypes", [common_1.Location, router_1.ActivatedRoute, data_Service_1.DataService])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQTJDO0FBQzNDLDBDQUFpRDtBQUNqRCw0REFBMEQ7QUFRMUQsSUFBYSxZQUFZO0lBSXJCLHNCQUEyQixRQUFrQixFQUFVLEtBQXFCLEVBQVUsSUFBaUI7UUFBNUUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNuRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXpDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDOUIsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sMkJBQUksR0FBWCxVQUFZLEVBQVUsRUFBRSxNQUFjO1FBQ2xDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBS3VDLGlCQUFRLEVBQWlCLHVCQUFjLEVBQWdCLDBCQUFXO0dBSjlGLFlBQVksQ0FrQ3hCO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL2RhdGEuU2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcblxyXG7CoFxyXG5AQ29tcG9uZW50KHtcclxuwqDCoMKgwqBzZWxlY3RvcjogXCJjYXJcIixcclxuwqDCoMKgwqB0ZW1wbGF0ZVVybDogXCIuL2Nhci9jYXIuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIENhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGNhcjogYW55OyBcclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLmNhciA9IHt9OyBcclxuwqDCoMKgwqB9XHJcblxyXG4gICAgb25QaWNrZXJMb2FkZWQoYXJncykge1xyXG4gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIGRhdGVQaWNrZXIueWVhciA9IDIwMTU7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tb250aCA9IDI7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5kYXkgPSA5O1xyXG4gICAgICAgIGRhdGVQaWNrZXIubWluRGF0ZSA9IG5ldyBEYXRlKDIwMTUsIDAsIDI5KTtcclxuICAgICAgICBkYXRlUGlja2VyLm1heERhdGUgPSBuZXcgRGF0ZSgyMDQ1LCA0LCAxMik7XHJcbiAgICB9XHJcbsKgICBcclxuwqDCoMKgwqBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgdGhpcy5jYXIgPSB0aGlzLmRhdGEuZ2V0Q2FyKHBhcmFtc1tcImlkXCJdKTsgXHJcbsKgwqDCoMKgwqDCoMKgwqB9KTsgXHJcbsKgwqDCoMKgfVxyXG7CoCBcclxuwqDCoMKgwqBwdWJsaWMgY2FuY2VsKCkge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbsKgwqDCoMKgfVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBzYXZlKGlkOiBudW1iZXIsIHBsYXRlczogc3RyaW5nKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqBpZihwbGF0ZXMgIT0gXCJcIikge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmRhdGEuZWRpdChwbGF0ZXMsaWQpO1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmxvY2F0aW9uLmJhY2soKTsgXHJcbsKgwqDCoMKgwqDCoMKgwqB9XHJcbsKgwqDCoMKgfVxyXG59Il19