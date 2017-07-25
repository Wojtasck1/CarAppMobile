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
    CarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.car = _this.data.getCar(params["id"]);
        });
    };
    CarComponent.prototype.cancel = function () {
        this.location.back();
    };
    CarComponent.prototype.save = function (id, name) {
        if (name != "") {
            this.data.edit(id, name);
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
    __metadata("design:paramtypes", [common_1.Location, router_1.ActivatedRoute, data_Service_1.CarService])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQTJDO0FBQzNDLDBDQUFpRDtBQUNqRCw0REFBeUQ7QUFNekQsSUFBYSxZQUFZO0lBSXJCLHNCQUEyQixRQUFrQixFQUFVLEtBQXFCLEVBQVUsSUFBZ0I7UUFBM0UsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNsRyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUM5QixLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSwyQkFBSSxHQUFYLFVBQVksRUFBVSxFQUFFLElBQVk7UUFDaEMsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxZQUFZO0lBSnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSwwQkFBMEI7S0FDMUMsQ0FBQztxQ0FLdUMsaUJBQVEsRUFBaUIsdUJBQWMsRUFBZ0IseUJBQVU7R0FKN0YsWUFBWSxDQXlCeEI7QUF6Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9kYXRhU2VydmljZS9kYXRhLlNlcnZpY2VcIjtcclxuwqBcclxuQENvbXBvbmVudCh7XHJcbsKgwqDCoMKgc2VsZWN0b3I6IFwiY2FyXCIsXHJcbsKgwqDCoMKgdGVtcGxhdGVVcmw6IFwiLi9jYXIvY2FyLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBjYXI6IGFueTsgXHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBkYXRhOiBDYXJTZXJ2aWNlKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLmNhciA9IHt9O1xyXG7CoMKgwqDCoH1cclxuwqAgXHJcbsKgwqDCoMKgcHVibGljIG5nT25Jbml0KCkge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHRoaXMuY2FyID0gdGhpcy5kYXRhLmdldENhcihwYXJhbXNbXCJpZFwiXSk7XHJcbsKgwqDCoMKgwqDCoMKgwqB9KTtcclxuwqDCoMKgwqB9XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGNhbmNlbCgpIHtcclxuwqDCoMKgwqDCoMKgwqDCoHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG7CoMKgwqDCoH1cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgc2F2ZShpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcclxuwqDCoMKgwqDCoMKgwqDCoGlmKG5hbWUgIT0gXCJcIikge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmRhdGEuZWRpdChpZCwgbmFtZSk7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG7CoMKgwqDCoMKgwqDCoMKgfVxyXG7CoMKgwqDCoH1cclxuwqBcclxufSJdfQ==