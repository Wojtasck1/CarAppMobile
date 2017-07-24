"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var TableComponent = (function () {
    function TableComponent(router) {
        this.router = router;
    }
    TableComponent.prototype.navigateToOtherChild = function () {
        this.router.navigate(["/car"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQVF6QyxJQUFhLGNBQWM7SUFFdkIsd0JBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV0Qyw2Q0FBb0IsR0FBM0I7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsOEJBQThCO0tBRTVDLENBQUM7cUNBSXFDLGVBQU07R0FGaEMsY0FBYyxDQVExQjtBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiBcInRhYi1jb21wbmVudFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFibGUvdGFibGUuY29tcG9uZW50Lmh0bWxcIixcclxuXHJcbn0pICBcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XHJcbiBcclxuwqDCoMKgwqBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgbmF2aWdhdGVUb090aGVyQ2hpbGQoKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2FyXCJdKTtcclxuwqDCoMKgwqB9XHJcblxyXG59ICJdfQ==