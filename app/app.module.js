"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var table_component_1 = require("./table/table.component");
var app_routing_1 = require("./app.routing");
var cars_component_1 = require("./cars/cars.component");
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
            cars_component_1.CarsComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        providers: [],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF5RDtBQUN6RCw2Q0FBaUQ7QUFDakQsd0RBQXNEO0FBRXRELDBEQUEwRDtBQUMxRCw2REFBNkQ7QUFHN0QsaURBQStDO0FBbUIvQyxJQUFhLFNBQVM7SUFBdEI7SUFBd0IsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUF6QixJQUF5QjtBQUFaLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCw4QkFBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw4QkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBDYXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2Fycy9jYXJzLmNvbXBvbmVudFwiO1xyXG5cclxuLy8gaW1wb3J0IHsgSHR0cENvbXBvbmVudCB9IGZyb20gJy4vaHR0cC9odHRwLmNvbXBvbmVudCc7IFxyXG4vLyBpbXBvcnQgeyBIdHRwQ2FyU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLWNhci5zZXJ2aWNlJzsgXHJcblxyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIENhcnNDb21wb25lbnQgXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtcclxuICAgIEFwcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19