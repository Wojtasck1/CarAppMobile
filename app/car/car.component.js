"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarComponent = (function () {
    function CarComponent() {
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
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        selector: "car-compnent",
        templateUrl: "./car/car.component.html",
    })
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFTMUMsSUFBYSxZQUFZO0lBTnpCO1FBWVMsVUFBSyxHQUFVO1lBQ3BCLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQztZQUN2QixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbEIsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDO1lBQ3JCLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBQztTQUN0QixDQUFBO1FBRUQsaURBQWlEO1FBRWpELElBQUk7UUFDTixzQkFBc0I7UUFDdEIsNkNBQTZDO1FBQzdDLGdDQUFnQztRQUNoQyw4Q0FBOEM7UUFDOUMsT0FBTztRQUNQLElBQUk7UUFFSiw0REFBNEQ7UUFFNUQsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUVqQyxNQUFNO0lBQ04sQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsMEJBQTBCO0tBRXhDLENBQUM7R0FFVyxZQUFZLENBNkJ4QjtBQTdCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi9kb21haW4vY2FyXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6IFwiY2FyLWNvbXBuZW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXIvY2FyLmNvbXBvbmVudC5odG1sXCIsIFxyXG5cclxufSkgIFxyXG5cclxuZXhwb3J0IGNsYXNzIENhckNvbXBvbmVudCB7XHJcblxyXG4gIGNhcnM6IENhcltdO1xyXG4gIGVycm9yU3RyaW5nOiBzdHJpbmc7ICAgXHJcblxyXG5cclxuICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW1xyXG4gICAge3RpdGxlOiAnTmF0aXZlU2NyaXB0J30sXHJcbiAgICB7dGl0bGU6ICdBbmd1bGFyJ30sXHJcbiAgICB7dGl0bGU6ICdUeXBlU2NyaXB0J30sXHJcbiAgICB7dGl0bGU6ICdKYXZhU2NyaXB0J31cclxuICBdXHJcbiBcclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogQXBwUm91dGluZ01vZHVsZSl7XHJcblxyXG4gIC8vIH1cclxuLy8gICBwdWJsaWMgZ2V0Q2Fycygpe1xyXG4vLyAgIHRoaXMuaHR0cENhclNlcnZpY2UuZ2V0Q2FycygpLnN1YnNjcmliZShcclxuLy8gICAgIGNhcnMgPT4gdGhpcy5jYXJzID0gY2FycyxcclxuLy8gICAgIGVycm9yID0+IHRoaXMuZXJyb3JTdHJpbmcgPSA8YW55PiBlcnJvclxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDYXJTZXJ2aWNlIDogSHR0cENhclNlcnZpY2Upe1xyXG5cclxuLy8gICAgIHRoaXMuZ2V0Q2FycztcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q2Fycyk7XHJcblxyXG4vLyAgIH1cclxufSAiXX0=