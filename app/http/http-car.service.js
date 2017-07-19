"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/Rx");
var HttpCarService = (function () {
    function HttpCarService(http) {
        this.http = http;
    }
    HttpCarService.prototype.getCarsSmall = function () {
        return this.http.get('http://localhost:8080/api/v1/car').map(function (res) { return res.json(); }).subscribe(function (data) { return console.warn(data.responseText); });
        // .toPromise() 
        // .then(res => <Car[]> res.json().data)
        // .then(data => { return data; });
    };
    HttpCarService.prototype.getCars = function () {
        return this.http.get('http://localhost:8080/api/v1/car')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HttpCarService.prototype.fetchCars = function () {
        return this.http.get('http://localhost:8080/api/v1/car').map(function (res) { return res.json(); }).subscribe(function (data) { return console.log(data.responseText); });
    };
    HttpCarService.prototype.DeleteCar = function () {
        return this.http.delete('http://localhost:8080/api/v1/car').map(function (res) { return res.json(); }).subscribe(function (data) { return console.warn(data.responseText); });
    };
    HttpCarService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HttpCarService;
}());
HttpCarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpCarService);
exports.HttpCarService = HttpCarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAtY2FyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhDQUErQztBQUUvQyxpQ0FBK0I7QUFDL0IsbUJBQWlCO0FBR2pCLElBQWEsY0FBYztJQUUzQix3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRy9CLHFDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxHQUFHLENBQzFELFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FDcEIsQ0FBQyxTQUFTLENBQ1QsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBL0IsQ0FBK0IsQ0FDMUMsQ0FBQTtRQUNXLGdCQUFnQjtRQUNoQix3Q0FBd0M7UUFDeEMsbUNBQW1DO0lBQ25ELENBQUM7SUFDQyxnQ0FBTyxHQUFQO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQzthQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsR0FBRyxDQUMxRCxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQ3BCLENBQUMsU0FBUyxDQUNULFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQTlCLENBQThCLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLEdBQUcsQ0FDN0QsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUNwQixDQUFDLFNBQVMsQ0FDVCxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUEvQixDQUErQixDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVXLG9DQUFXLEdBQW5CLFVBQXFCLEtBQXFCO1FBQzVDLHFFQUFxRTtRQUNyRSxJQUFJLE1BQWMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7UUFDaEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUQsQ0FBQztRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFRSCxxQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdhLFdBQUk7R0FGakIsY0FBYyxDQXdEMUI7QUF4RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJzsgXHJcbmltcG9ydCB7IENhciB9IGZyb20gJy4uL2RvbWFpbi9jYXInIFxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2FyU2VydmljZSB7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gXHJcbiBcclxuICAgIGdldENhcnNTbWFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9jYXInKS5tYXAoXHJcbiAgICAgICAgICAocmVzKSA9PiByZXMuanNvbigpIFxyXG4gICAgICAgICkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKGRhdGEpID0+IGNvbnNvbGUud2FybihkYXRhLnJlc3BvbnNlVGV4dClcclxuICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLnRvUHJvbWlzZSgpIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC50aGVuKHJlcyA9PiA8Q2FyW10+IHJlcy5qc29uKCkuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAudGhlbihkYXRhID0+IHsgcmV0dXJuIGRhdGE7IH0pO1xyXG4gICAgfVxyXG4gICAgICBnZXRDYXJzKCk6IE9ic2VydmFibGU8Q2FyW10+IHsgIFxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvY2FyJykgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gPENhcltdPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9IFxyXG5cclxuICBmZXRjaENhcnMoKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2NhcicpLm1hcChcclxuICAgICAgKHJlcykgPT4gcmVzLmpzb24oKVxyXG4gICAgKS5zdWJzY3JpYmUoIFxyXG4gICAgICAoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YS5yZXNwb25zZVRleHQpIFxyXG4gICAgKTtcclxuICB9IFxyXG4gIERlbGV0ZUNhcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvY2FyJykubWFwKFxyXG4gICAgICAocmVzKSA9PiByZXMuanNvbigpXHJcbiAgICApLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IGNvbnNvbGUud2FybihkYXRhLnJlc3BvbnNlVGV4dCkgXHJcbiAgICApO1xyXG4gIH0gXHJcblxyXG4gICAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHlvdSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xyXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcclxuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTsgXHJcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbiAgLy8gICBDcmVhdGVDYXIoKXtcclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9jYXInKS5tYXAoXHJcbiAgLy8gICAgIChyZXMpID0+IHJlcy5qc29uKClcclxuICAvLyAgICkuc3Vic2NyaWJlKCBcclxuICAvLyAgICAgKGRhdGEpID0+IGNvbnNvbGUud2FybihkYXRhLnJlc3BvbnNlVGV4dCkgXHJcbiAgLy8gICApO1xyXG4gIC8vIH0gXHJcbn0gIl19