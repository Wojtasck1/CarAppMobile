"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var table_component_1 = require("./table/table.component");
var app_routing_1 = require("./app.routing");
var cars_component_1 = require("./cars/cars.component");
var car_component_1 = require("./car/car.component");
var data_Service_1 = require("./dataService/data.Service");
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
        providers: [data_Service_1.DataService],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF5RDtBQUN6RCw2Q0FBaUQ7QUFDakQsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCwyREFBeUQ7QUFFekQsaURBQStDO0FBb0IvQyxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFqQnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCw4QkFBYTtZQUNiLDRCQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCw0QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDhCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IENhcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJzL2NhcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhckNvbXBvbmVudCB9IGZyb20gXCIuL2Nhci9jYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YVNlcnZpY2UvZGF0YS5TZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudCxcclxuICAgIFRhYmxlQ29tcG9uZW50LCBcclxuICAgIENhcnNDb21wb25lbnQsXHJcbiAgICBDYXJDb21wb25lbnRcclxuICBdLCBcclxuICBib290c3RyYXA6IFtcclxuICAgIEFwcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iXX0=