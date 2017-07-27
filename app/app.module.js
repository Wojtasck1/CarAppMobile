"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// import { Ng2SmartTableModule } from 'ng2-smart-table';
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
            app_routing_1.AppRoutingModule,
        ],
        providers: [data_Service_1.DataService],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsZ0ZBQThFO0FBQzlFLHlEQUF5RDtBQUV6RCwyREFBeUQ7QUFDekQsNkNBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCxxREFBbUQ7QUFDbkQsMkRBQXlEO0FBRXpELGlEQUErQztBQXFCL0MsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBbEJyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsOEJBQWE7WUFDYiw0QkFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw4QkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FFVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlICwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xyXG5cclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IENhcnNDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJzL2NhcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhckNvbXBvbmVudCB9IGZyb20gXCIuL2Nhci9jYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vZGF0YVNlcnZpY2UvZGF0YS5TZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbiBcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgICBUYWJsZUNvbXBvbmVudCwgXHJcbiAgICBDYXJzQ29tcG9uZW50LFxyXG4gICAgQ2FyQ29tcG9uZW50XHJcbiAgXSwgXHJcbiAgYm9vdHN0cmFwOiBbXHJcbiAgICBBcHBDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV0sXHJcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLCBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuICJdfQ==