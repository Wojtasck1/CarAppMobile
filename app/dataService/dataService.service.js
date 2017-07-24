"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataServiceComponent = (function () {
    function DataServiceComponent() {
        // this.cars = [
        //     {
        //         "carId": 1,
        //         "plates": "TKI997",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America", 
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 2,
        //         "plates": "TKI998",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 3,
        //         "plates": "TKI999",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1, 
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 4,
        //         "plates": "TKI910",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     },
        //     {
        //         "carId": 5,
        //         "plates": "TKI911",
        //         "overview": "Captain America",
        //        // "insurance": "Captain America",
        //         "course": 150000, 
        //         "description": "Captain America",
        //         "usersId": 1,
        //         "lastOilChange": 120000,
        //         "noteList": "Captain America"
        //     }
        // ];
    }
    DataServiceComponent.prototype.getcCars = function () {
        return this.cars;
    };
    DataServiceComponent.prototype.getCars = function (carId) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].carId == carId) {
                return this.cars[i];
            }
        }
        return -1;
    };
    DataServiceComponent.prototype.delete = function (carId) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].carId == carId) {
                this.cars.splice(i, 1);
                break;
            }
        }
    };
    DataServiceComponent.prototype.add = function (value) {
        this.cars.push();
    };
    DataServiceComponent.prototype.edit = function (id, plates) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].carId == id) {
                this.cars[i].plates = plates;
                break;
            }
        }
    };
    return DataServiceComponent;
}());
DataServiceComponent = __decorate([
    core_1.Component({
        selector: "dataService-compnent",
        templateUrl: "./dataService/dataService.component.html",
    }),
    __metadata("design:paramtypes", [])
], DataServiceComponent);
exports.DataServiceComponent = DataServiceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFTZXJ2aWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFRMUMsSUFBYSxvQkFBb0I7SUFPN0I7UUFDSSxnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIseUNBQXlDO1FBQ3pDLDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFDN0IsNkNBQTZDO1FBQzdDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBRXhDLFNBQVM7UUFDVCxRQUFRO1FBQ1Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5Qix5Q0FBeUM7UUFDekMsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUM3Qiw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQyx3Q0FBd0M7UUFDeEMsU0FBUztRQUNULFFBQVE7UUFDUixzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlDQUF5QztRQUN6Qyw0Q0FBNEM7UUFDNUMsNkJBQTZCO1FBQzdCLDRDQUE0QztRQUM1Qyx5QkFBeUI7UUFDekIsbUNBQW1DO1FBQ25DLHdDQUF3QztRQUN4QyxTQUFTO1FBQ1QsUUFBUTtRQUNSLHNCQUFzQjtRQUN0Qiw4QkFBOEI7UUFDOUIseUNBQXlDO1FBQ3pDLDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFDN0IsNENBQTRDO1FBQzVDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsd0NBQXdDO1FBQ3hDLFNBQVM7UUFDVCxRQUFRO1FBQ1Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5Qix5Q0FBeUM7UUFDekMsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUM3Qiw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQyx3Q0FBd0M7UUFDeEMsUUFBUTtRQUNSLEtBQUs7SUFDVCxDQUFDO0lBRU0sdUNBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxzQ0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRU0scUNBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU0sa0NBQUcsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBUWIsQ0FBQztJQUNOLENBQUM7SUFFTSxtQ0FBSSxHQUFYLFVBQVksRUFBVSxFQUFFLE1BQWM7UUFDbEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBL0dELElBK0dDO0FBL0dZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxXQUFXLEVBQUUsMENBQTBDO0tBQ3hELENBQUM7O0dBRVcsb0JBQW9CLENBK0doQztBQS9HWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vZG9tYWluL2NhclwiO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiBcImRhdGFTZXJ2aWNlLWNvbXBuZW50XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kYXRhU2VydmljZS9kYXRhU2VydmljZS5jb21wb25lbnQuaHRtbFwiLFxyXG59KSAgXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2VDb21wb25lbnQge1xyXG5cclxuLy8gIGNhcnM6IENhcltdO1xyXG4gIGVycm9yU3RyaW5nOiBzdHJpbmc7IFxyXG5cclxuICAgcHJpdmF0ZSBjYXJzOiBBcnJheTxDYXI+O1xyXG4gXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jYXJzID0gW1xyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNhcklkXCI6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICBcInBsYXRlc1wiOiBcIlRLSTk5N1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJvdmVydmlld1wiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAvLyBcImluc3VyYW5jZVwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjb3Vyc2VcIjogMTUwMDAwLCBcclxuICAgICAgICAvLyAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDYXB0YWluIEFtZXJpY2FcIiwgXHJcbiAgICAgICAgLy8gICAgICAgICBcInVzZXJzSWRcIjogMSxcclxuICAgICAgICAvLyAgICAgICAgIFwibGFzdE9pbENoYW5nZVwiOiAxMjAwMDAsXHJcbiAgICAgICAgLy8gICAgICAgICBcIm5vdGVMaXN0XCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCJcclxuXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY2FySWRcIjogMixcclxuICAgICAgICAvLyAgICAgICAgIFwicGxhdGVzXCI6IFwiVEtJOTk4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcIm92ZXJ2aWV3XCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCIsXHJcbiAgICAgICAgLy8gICAgICAgIC8vIFwiaW5zdXJhbmNlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImNvdXJzZVwiOiAxNTAwMDAsIFxyXG4gICAgICAgIC8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ1c2Vyc0lkXCI6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICBcImxhc3RPaWxDaGFuZ2VcIjogMTIwMDAwLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJub3RlTGlzdFwiOiBcIkNhcHRhaW4gQW1lcmljYVwiXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY2FySWRcIjogMyxcclxuICAgICAgICAvLyAgICAgICAgIFwicGxhdGVzXCI6IFwiVEtJOTk5XCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcIm92ZXJ2aWV3XCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCIsXHJcbiAgICAgICAgLy8gICAgICAgIC8vIFwiaW5zdXJhbmNlXCI6IFwiQ2FwdGFpbiBBbWVyaWNhXCIsXHJcbiAgICAgICAgLy8gICAgICAgICBcImNvdXJzZVwiOiAxNTAwMDAsIFxyXG4gICAgICAgIC8vICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJ1c2Vyc0lkXCI6IDEsIFxyXG4gICAgICAgIC8vICAgICAgICAgXCJsYXN0T2lsQ2hhbmdlXCI6IDEyMDAwMCxcclxuICAgICAgICAvLyAgICAgICAgIFwibm90ZUxpc3RcIjogXCJDYXB0YWluIEFtZXJpY2FcIlxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNhcklkXCI6IDQsXHJcbiAgICAgICAgLy8gICAgICAgICBcInBsYXRlc1wiOiBcIlRLSTkxMFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJvdmVydmlld1wiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAvLyBcImluc3VyYW5jZVwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjb3Vyc2VcIjogMTUwMDAwLCBcclxuICAgICAgICAvLyAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDYXB0YWluIEFtZXJpY2FcIixcclxuICAgICAgICAvLyAgICAgICAgIFwidXNlcnNJZFwiOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJsYXN0T2lsQ2hhbmdlXCI6IDEyMDAwMCxcclxuICAgICAgICAvLyAgICAgICAgIFwibm90ZUxpc3RcIjogXCJDYXB0YWluIEFtZXJpY2FcIlxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICBcImNhcklkXCI6IDUsXHJcbiAgICAgICAgLy8gICAgICAgICBcInBsYXRlc1wiOiBcIlRLSTkxMVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJvdmVydmlld1wiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAvLyBcImluc3VyYW5jZVwiOiBcIkNhcHRhaW4gQW1lcmljYVwiLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJjb3Vyc2VcIjogMTUwMDAwLCBcclxuICAgICAgICAvLyAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDYXB0YWluIEFtZXJpY2FcIixcclxuICAgICAgICAvLyAgICAgICAgIFwidXNlcnNJZFwiOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJsYXN0T2lsQ2hhbmdlXCI6IDEyMDAwMCxcclxuICAgICAgICAvLyAgICAgICAgIFwibm90ZUxpc3RcIjogXCJDYXB0YWluIEFtZXJpY2FcIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gXTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGdldGNDYXJzKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcnM7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBnZXRDYXJzKGNhcklkOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jYXJzW2ldLmNhcklkID09IGNhcklkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYXJzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGRlbGV0ZShjYXJJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2Fycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNhcnNbaV0uY2FySWQgPT0gY2FySWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gICAgcHVibGljIGFkZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jYXJzLnB1c2goXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFwiY2FySWRcIjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEpKSArIDEsXHJcbiAgICAgICAgICAgICAgLy8gXCJwbGF0ZXNcIjogdmFsdWVcclxuXHJcbiAgLy8gICAgICAgICAgICAgIFwiaWRcIjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEpKSArIDEsXHJcbiAgLy8gICAgICAgICAgICAgIFwibmFtZVwiOiB2YWx1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgZWRpdChpZDogbnVtYmVyLCBwbGF0ZXM6IHN0cmluZykge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jYXJzW2ldLmNhcklkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnNbaV0ucGxhdGVzID0gcGxhdGVzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59ICJdfQ==