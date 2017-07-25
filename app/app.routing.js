"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var table_component_1 = require("./table/table.component");
var cars_component_1 = require("./cars/cars.component");
var routes = [
    { path: "", component: table_component_1.TableComponent,
        children: [
            { path: "", component: table_component_1.TableComponent },
            { path: "cars", component: cars_component_1.CarsComponent },
            { path: "car/:id", component: cars_component_1.CarsComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHdEQUFzRDtBQUd0RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjO1FBQ2pDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO1NBQy9DO0tBQ0o7Q0FFSixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDYXJzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2Fycy9jYXJzLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG7CoMKgwqDCoHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCxcclxuwqDCoMKgwqDCoMKgwqDCoGNoaWxkcmVuOiBbXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6IFwiY2Fyc1wiLCBjb21wb25lbnQ6IENhcnNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImNhci86aWRcIiwgY29tcG9uZW50OiBDYXJzQ29tcG9uZW50fSxcclxuwqDCoMKgwqDCoMKgwqDCoF1cclxuwqDCoMKgwqB9LFxyXG4vL8KgwqDCoMKgeyBwYXRoOiBcIm90aGVycGFyZW50XCIsIGNvbXBvbmVudDogT3RoZXJQYXJlbnRDb21wb25lbnQgfVxyXG5dO1xyXG7CoFxyXG5ATmdNb2R1bGUoe1xyXG7CoMKgwqDCoGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuwqDCoMKgwqBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KSBcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19