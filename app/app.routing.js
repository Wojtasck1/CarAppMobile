"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var table_component_1 = require("./table/table.component");
var car_component_1 = require("./car/car.component");
var routes = [
    { path: "", component: table_component_1.TableComponent,
        children: [
            { path: "", component: car_component_1.CarComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBQ3pELHFEQUFtRDtBQUduRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjO1FBQ2pDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtTQUN4QztLQUNKO0NBRUosQ0FBQztBQU1GLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBSjVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyL2Nhci5jb21wb25lbnRcIjtcclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuwqDCoMKgwqB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQsXHJcbsKgwqDCoMKgwqDCoMKgwqBjaGlsZHJlbjogW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQ2FyQ29tcG9uZW50IH0sXHJcbsKgwqDCoMKgwqDCoMKgwqBdXHJcbsKgwqDCoMKgfSxcclxuLy/CoMKgwqDCoHsgcGF0aDogXCJvdGhlcnBhcmVudFwiLCBjb21wb25lbnQ6IE90aGVyUGFyZW50Q29tcG9uZW50IH1cclxuXTtcclxuwqBcclxuQE5nTW9kdWxlKHtcclxuwqDCoMKgwqBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbsKgwqDCoMKgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19