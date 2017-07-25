"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TableComponent = (function () {
    function TableComponent(router) {
        this.router = router;
    }
    TableComponent.prototype.navigateToCar = function () {
        this.router.navigate(["/cars"]);
    };
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        selector: "tab-compnent",
        templateUrl: "./table/table.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], TableComponent);
exports.TableComponent = TableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQVF6QyxJQUFhLGNBQWM7SUFFdkIsd0JBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0QyxzQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7S0FFNUMsQ0FBQztxQ0FJcUMsZUFBTTtHQUZoQyxjQUFjLENBUTFCO0FBUlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6IFwidGFiLWNvbXBuZW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJsZS90YWJsZS5jb21wb25lbnQuaHRtbFwiLFxyXG5cclxufSkgIFxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuIFxyXG7CoMKgwqDCoHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBuYXZpZ2F0ZVRvQ2FyKCkge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhcnNcIl0pO1xyXG7CoMKgwqDCoH1cclxuXHJcbn0gIl19