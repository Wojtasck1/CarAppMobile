"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var table_component_1 = require("./table/table.component");
var cars_component_1 = require("./cars/cars.component");
var car_component_1 = require("./car/car.component");
var app_component_1 = require("./app.component");
var routes = [
    { path: "", component: app_component_1.AppComponent,
        children: [
            { path: "", component: table_component_1.TableComponent },
            { path: "cars", component: cars_component_1.CarsComponent },
            { path: "car/:id", component: car_component_1.CarComponent },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQUN0RCxxREFBbUQ7QUFDbkQsaURBQStDO0FBRy9DLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNEJBQVk7UUFDL0IsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUMxQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUM7U0FDOUM7S0FDSjtDQUVKLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJzL2NhcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhckNvbXBvbmVudCB9IGZyb20gXCIuL2Nhci9jYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuwqDCoMKgwqB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG7CoMKgwqDCoMKgwqDCoMKgY2hpbGRyZW46IFtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFRhYmxlQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJjYXJzXCIsIGNvbXBvbmVudDogQ2Fyc0NvbXBvbmVudCB9LCBcclxuICAgICAgICAgICAgeyBwYXRoOiBcImNhci86aWRcIiwgY29tcG9uZW50OiBDYXJDb21wb25lbnR9LFxyXG7CoMKgwqDCoMKgwqDCoMKgXSBcclxuwqDCoMKgwqB9LFxyXG4vL8KgwqDCoMKgeyBwYXRoOiBcIm90aGVycGFyZW50XCIsIGNvbXBvbmVudDogT3RoZXJQYXJlbnRDb21wb25lbnQgfVxyXG5dO1xyXG7CoCAgXHJcbkBOZ01vZHVsZSh7XHJcbsKgwqDCoMKgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG7CoMKgwqDCoGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pICBcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9ICAgICAiXX0=