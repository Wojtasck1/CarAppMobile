"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var table_component_1 = require("./table/table.component");
var app_routing_1 = require("./app.routing");
var cars_component_1 = require("./cars/cars.component");
var car_component_1 = require("./car/car.component");
var data_Service_1 = require("./dataService/data.Service");
// import { HttpComponent } from './http/http.component'; 
// import { HttpCarService } from './http/http-car.service'; 
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            table_component_1.TableComponent,
            cars_component_1.CarsComponent,
            car_component_1.CarComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        providers: [data_Service_1.CarService],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF5RDtBQUN6RCw2Q0FBaUQ7QUFDakQsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCwyREFBd0Q7QUFFeEQsMERBQTBEO0FBQzFELDZEQUE2RDtBQUc3RCxpREFBK0M7QUFvQi9DLElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQWpCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWixnQ0FBYztZQUNkLDhCQUFhO1lBQ2IsNEJBQVk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULDRCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFLENBQUMseUJBQVUsQ0FBQztRQUN2QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQ2Fyc0NvbXBvbmVudCB9IGZyb20gXCIuL2NhcnMvY2Fycy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyL2Nhci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL2RhdGFTZXJ2aWNlL2RhdGEuU2VydmljZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgSHR0cENvbXBvbmVudCB9IGZyb20gJy4vaHR0cC9odHRwLmNvbXBvbmVudCc7IFxyXG4vLyBpbXBvcnQgeyBIdHRwQ2FyU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLWNhci5zZXJ2aWNlJzsgXHJcblxyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCwgXHJcbiAgICBDYXJzQ29tcG9uZW50LFxyXG4gICAgQ2FyQ29tcG9uZW50XHJcbiAgXSwgXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBBcHBDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0NhclNlcnZpY2VdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=