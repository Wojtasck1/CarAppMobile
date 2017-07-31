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
    CarComponent.prototype.onPickerLoadedInsurance = function (dateInsurance) {
        dateInsurance.year = 2010;
        dateInsurance.month = 2;
        dateInsurance.day = 9;
        dateInsurance.minDate = new Date(2010, 0, 29);
        dateInsurance.maxDate = new Date(2045, 4, 12);
    };
    CarComponent.prototype.onPickerLoadedOverview = function (dateOverview) {
        dateOverview.year = 2010;
        dateOverview.month = 2;
        dateOverview.day = 9;
        dateOverview.minDate = new Date(2010, 0, 29);
        dateOverview.maxDate = new Date(2045, 4, 12);
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
    CarComponent.prototype.save = function (id, plates, course, description, users_id) {
        if (plates != "") {
            this.data.edit(id, plates, course, description, users_id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQTJDO0FBQzNDLDBDQUFpRDtBQUNqRCw0REFBMEQ7QUFTMUQsSUFBYSxZQUFZO0lBSXJCLHNCQUEyQixRQUFrQixFQUFVLEtBQXFCLEVBQVUsSUFBaUI7UUFBNUUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNuRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsOENBQXVCLEdBQXZCLFVBQXdCLGFBQXlCO1FBQzdDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUdELDZDQUFzQixHQUF0QixVQUF1QixZQUF3QjtRQUMzQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN6QixZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QixZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyQixZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLDJCQUFJLEdBQVgsVUFBWSxFQUFVLEVBQUcsTUFBYyxFQUFHLE1BQWMsRUFBRyxXQUFtQixFQUFHLFFBQWdCO1FBQzdGLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRyxNQUFNLEVBQUcsV0FBVyxFQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7cUNBS3VDLGlCQUFRLEVBQWlCLHVCQUFjLEVBQWdCLDBCQUFXO0dBSjlGLFlBQVksQ0F5Q3hCO0FBekNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL2RhdGEuU2VydmljZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuXHJcbsKgXHJcbkBDb21wb25lbnQoe1xyXG7CoMKgwqDCoHNlbGVjdG9yOiBcImNhclwiLFxyXG7CoMKgwqDCoHRlbXBsYXRlVXJsOiBcIi4vY2FyL2Nhci5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgY2FyOiBhbnk7IFxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZGF0YTogRGF0YVNlcnZpY2UpIHtcclxuwqDCoMKgwqDCoMKgwqDCoHRoaXMuY2FyID0ge307IFxyXG7CoMKgwqDCoH1cclxuICBcclxuICAgIG9uUGlja2VyTG9hZGVkSW5zdXJhbmNlKGRhdGVJbnN1cmFuY2U6IERhdGVQaWNrZXIpIHtcclxuICAgICAgICBkYXRlSW5zdXJhbmNlLnllYXIgPSAyMDEwO1xyXG4gICAgICAgIGRhdGVJbnN1cmFuY2UubW9udGggPSAyO1xyXG4gICAgICAgIGRhdGVJbnN1cmFuY2UuZGF5ID0gOTtcclxuICAgICAgICBkYXRlSW5zdXJhbmNlLm1pbkRhdGUgPSBuZXcgRGF0ZSgyMDEwLCAwLCAyOSk7XHJcbiAgICAgICAgZGF0ZUluc3VyYW5jZS5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblBpY2tlckxvYWRlZE92ZXJ2aWV3KGRhdGVPdmVydmlldzogRGF0ZVBpY2tlcikge1xyXG4gICAgICAgIGRhdGVPdmVydmlldy55ZWFyID0gMjAxMDtcclxuICAgICAgICBkYXRlT3ZlcnZpZXcubW9udGggPSAyOyBcclxuICAgICAgICBkYXRlT3ZlcnZpZXcuZGF5ID0gOTsgXHJcbiAgICAgICAgZGF0ZU92ZXJ2aWV3Lm1pbkRhdGUgPSBuZXcgRGF0ZSgyMDEwLCAwLCAyOSk7IFxyXG4gICAgICAgIGRhdGVPdmVydmlldy5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG7CoCAgXHJcbsKgwqDCoMKgcHVibGljIG5nT25Jbml0KCkge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHRoaXMuY2FyID0gdGhpcy5kYXRhLmdldENhcihwYXJhbXNbXCJpZFwiXSk7IFxyXG7CoMKgwqDCoMKgwqDCoMKgfSk7IFxyXG7CoMKgwqDCoH1cclxuwqAgXHJcbsKgwqDCoMKgcHVibGljIGNhbmNlbCgpIHtcclxuwqDCoMKgwqDCoMKgwqDCoHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG7CoMKgwqDCoH1cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgc2F2ZShpZDogbnVtYmVyICwgcGxhdGVzOiBzdHJpbmcgLCBjb3Vyc2U6IHN0cmluZyAsIGRlc2NyaXB0aW9uOiBzdHJpbmcgLCB1c2Vyc19pZDogc3RyaW5nKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqBpZihwbGF0ZXMgIT0gXCJcIikge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmRhdGEuZWRpdChpZCwgcGxhdGVzICwgY291cnNlICwgZGVzY3JpcHRpb24gLCB1c2Vyc19pZCk7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHRoaXMubG9jYXRpb24uYmFjaygpOyBcclxuwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqB9XHJcbn0iXX0=