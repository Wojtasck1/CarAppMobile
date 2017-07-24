"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var table_component_1 = require("./table/table.component");
var http_component_1 = require("./http/http.component");
var http_car_service_1 = require("./http/http-car.service");
var dataService_service_1 = require("./dataService/dataService.service");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, table_component_1.TableComponent, http_component_1.HttpComponent, http_car_service_1.HttpCarService],
        bootstrap: [app_component_1.AppComponent],
        imports: [nativescript_module_1.NativeScriptModule],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: [dataService_service_1.DataServiceComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDJEQUF5RDtBQUV6RCx3REFBc0Q7QUFDdEQsNERBQXlEO0FBRXpELHlFQUF5RTtBQUN6RSxpREFBK0M7QUFVL0MsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBUHJCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUMsZ0NBQWMsRUFBQyw4QkFBYSxFQUFDLGlDQUFjLENBQUM7UUFDeEUsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztRQUMzQixTQUFTLEVBQUMsQ0FBQywwQ0FBb0IsQ0FBQztLQUNqQyxDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ29tcG9uZW50IH0gZnJvbSAnLi9odHRwL2h0dHAuY29tcG9uZW50JzsgXHJcbmltcG9ydCB7IEh0dHBDYXJTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtY2FyLnNlcnZpY2UnOyBcclxuXHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSBcIi4vZGF0YVNlcnZpY2UvZGF0YVNlcnZpY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsVGFibGVDb21wb25lbnQsSHR0cENvbXBvbmVudCxIdHRwQ2FyU2VydmljZV0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlXSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sIFxyXG4gIHByb3ZpZGVyczpbRGF0YVNlcnZpY2VDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiJdfQ==