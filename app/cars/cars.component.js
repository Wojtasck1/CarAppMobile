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
    __metadata("design:paramtypes", [router_1.Router, data_Service_1.DataService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsNERBQTBEO0FBTzFELElBQWEsYUFBYTtJQUl0Qix1QkFBMkIsTUFBYyxFQUFVLElBQWlCO1FBQXpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLEtBQWE7UUFDcEIsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSw0QkFBSSxHQUFYLFVBQVksRUFBVTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQUtxQyxlQUFNLEVBQWdCLDBCQUFXO0dBSjNELGFBQWEsQ0FxQnpCO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhU2VydmljZS9kYXRhLlNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL2RvbWFpbi9jYXJcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbsKgwqDCoMKgc2VsZWN0b3I6IFwiY2Fyc1wiLFxyXG7CoMKgwqDCoHRlbXBsYXRlVXJsOiBcIi4vY2Fycy9jYXJzLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pIFxyXG5leHBvcnQgY2xhc3MgQ2Fyc0NvbXBvbmVudCB7XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGNhcnM6IEFycmF5PENhcj47IFxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGE6IERhdGFTZXJ2aWNlKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLmNhcnMgPSB0aGlzLmRhdGEuZ2V0Q2FycygpO1xyXG7CoMKgwqDCoH1cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgYWRkKHZhbHVlOiBzdHJpbmcpIHtcclxuwqDCoMKgwqDCoMKgwqDCoGlmKHZhbHVlICE9IFwiXCIpIHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgdGhpcy5kYXRhLmFkZCh2YWx1ZSk7XHJcbsKgwqDCoMKgwqDCoMKgwqB9XHJcbsKgwqDCoMKgfVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyByZW1vdmUoaWQ6IG51bWJlcikge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5kYXRhLmRlbGV0ZShpZCk7XHJcbsKgwqDCoMKgfVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBlZGl0KGlkOiBudW1iZXIpIHtcclxuwqDCoMKgwqDCoMKgwqDCoHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJcIiwgaWRdKTsgIFxyXG7CoMKgwqDCoH1cclxufSJdfQ==