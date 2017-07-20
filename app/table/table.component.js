"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_car_service_1 = require("../http/http-car.service");
var TableComponent = (function () {
    function TableComponent(httpCarService) {
        this.httpCarService = httpCarService;
        this.getCars;
        console.log(this.getCars);
    }
    TableComponent.prototype.getCars = function () {
        var _this = this;
        this.httpCarService.getCars().subscribe(function (cars) { return _this.cars = cars; }, function (error) { return _this.errorString = error; });
    };
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        selector: "tab-compnent",
        templateUrl: "./table/table.component.html",
    }),
    __metadata("design:paramtypes", [http_car_service_1.HttpCarService])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDZEQUEwRDtBQVExRCxJQUFhLGNBQWM7SUFhekIsd0JBQXNCLGNBQStCO1FBQS9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUVuRCxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQVpNLGdDQUFPLEdBQWQ7UUFBQSxpQkFLRDtRQUpDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUN4QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQVMsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQVFELHFCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsOEJBQThCO0tBRTVDLENBQUM7cUNBZXVDLGlDQUFjO0dBYjFDLGNBQWMsQ0FtQjFCO0FBbkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL2RvbWFpbi9jYXJcIjtcclxuaW1wb3J0IHsgSHR0cENhclNlcnZpY2UgfSBmcm9tIFwiLi4vaHR0cC9odHRwLWNhci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6IFwidGFiLWNvbXBuZW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG5cclxufSkgIFxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuXHJcbiAgY2FyczogQ2FyW107XHJcbiAgZXJyb3JTdHJpbmc6IHN0cmluZzsgIFxyXG5cclxuXHJcbiAgcHVibGljIGdldENhcnMoKXtcclxuICB0aGlzLmh0dHBDYXJTZXJ2aWNlLmdldENhcnMoKS5zdWJzY3JpYmUoXHJcbiAgICBjYXJzID0+IHRoaXMuY2FycyA9IGNhcnMsXHJcbiAgICBlcnJvciA9PiB0aGlzLmVycm9yU3RyaW5nID0gPGFueT4gZXJyb3JcclxuICApO1xyXG59XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2FyU2VydmljZSA6IEh0dHBDYXJTZXJ2aWNlKXtcclxuXHJcbiAgICB0aGlzLmdldENhcnM7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldENhcnMpO1xyXG5cclxuICB9XHJcbn0gIl19