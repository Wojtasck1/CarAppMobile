"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarsComponent = (function () {
    function CarsComponent() {
        this.items = [
            { title: 'NativeScript' },
            { title: 'Angular' },
            { title: 'TypeScript' },
            { title: 'JavaScript' }
        ];
        // constructor(private router: AppRoutingModule){
        // }
        //   public getCars(){
        //   this.httpCarService.getCars().subscribe(
        //     cars => this.cars = cars,
        //     error => this.errorString = <any> error
        //   );
        // }
        //   constructor(protected httpCarService : HttpCarService){
        //     this.getCars;
        //     console.log(this.getCars);
        //   }
    }
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: "car-compnent",
        templateUrl: "./car/car.component.html",
    })
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQVMxQyxJQUFhLGFBQWE7SUFOMUI7UUFZUyxVQUFLLEdBQVU7WUFDcEIsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFDO1lBQ3ZCLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQztZQUNsQixFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUM7WUFDckIsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDO1NBQ3RCLENBQUE7UUFFRCxpREFBaUQ7UUFFakQsSUFBSTtRQUNOLHNCQUFzQjtRQUN0Qiw2Q0FBNkM7UUFDN0MsZ0NBQWdDO1FBQ2hDLDhDQUE4QztRQUM5QyxPQUFPO1FBQ1AsSUFBSTtRQUVKLDREQUE0RDtRQUU1RCxvQkFBb0I7UUFDcEIsaUNBQWlDO1FBRWpDLE1BQU07SUFDTixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7S0FFeEMsQ0FBQztHQUVXLGFBQWEsQ0E2QnpCO0FBN0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL2RvbWFpbi9jYXJcIjtcclxuXHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogXCJjYXItY29tcG5lbnRcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Nhci9jYXIuY29tcG9uZW50Lmh0bWxcIiwgXHJcblxyXG59KSAgXHJcblxyXG5leHBvcnQgY2xhc3MgQ2Fyc0NvbXBvbmVudCB7XHJcblxyXG4gIGNhcnM6IENhcltdO1xyXG4gIGVycm9yU3RyaW5nOiBzdHJpbmc7ICAgXHJcblxyXG5cclxuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW1xyXG4gICAge3RpdGxlOiAnTmF0aXZlU2NyaXB0J30sXHJcbiAgICB7dGl0bGU6ICdBbmd1bGFyJ30sXHJcbiAgICB7dGl0bGU6ICdUeXBlU2NyaXB0J30sXHJcbiAgICB7dGl0bGU6ICdKYXZhU2NyaXB0J31cclxuICBdXHJcbiBcclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogQXBwUm91dGluZ01vZHVsZSl7XHJcblxyXG4gIC8vIH1cclxuLy8gICBwdWJsaWMgZ2V0Q2Fycygpe1xyXG4vLyAgIHRoaXMuaHR0cENhclNlcnZpY2UuZ2V0Q2FycygpLnN1YnNjcmliZShcclxuLy8gICAgIGNhcnMgPT4gdGhpcy5jYXJzID0gY2FycyxcclxuLy8gICAgIGVycm9yID0+IHRoaXMuZXJyb3JTdHJpbmcgPSA8YW55PiBlcnJvclxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDYXJTZXJ2aWNlIDogSHR0cENhclNlcnZpY2Upe1xyXG5cclxuLy8gICAgIHRoaXMuZ2V0Q2FycztcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q2Fycyk7XHJcblxyXG4vLyAgIH1cclxufSAiXX0=