"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var table_component_1 = require("./table/table.component");
var car_component_1 = require("./car/car.component");
var routes = [
    { path: "", component: table_component_1.TableComponent,
        children: [
            { path: "", component: table_component_1.TableComponent },
            { path: "car", component: car_component_1.CarComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHFEQUFtRDtBQUVuRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjO1FBQ2pDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUN2QyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUU7U0FDM0M7S0FDSjtDQUVKLENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFibGUvdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhckNvbXBvbmVudCB9IGZyb20gXCIuL2Nhci9jYXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuwqDCoMKgwqB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQsXHJcbsKgwqDCoMKgwqDCoMKgwqBjaGlsZHJlbjogW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiBcImNhclwiLCBjb21wb25lbnQ6IENhckNvbXBvbmVudCB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgXVxyXG7CoMKgwqDCoH0sXHJcbi8vwqDCoMKgwqB7IHBhdGg6IFwib3RoZXJwYXJlbnRcIiwgY29tcG9uZW50OiBPdGhlclBhcmVudENvbXBvbmVudCB9XHJcbl07XHJcbsKgXHJcbkBOZ01vZHVsZSh7XHJcbsKgwqDCoMKgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG7CoMKgwqDCoGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pIFxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=