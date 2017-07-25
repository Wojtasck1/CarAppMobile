"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CarService = (function () {
    function CarService() {
        this.cars = [
            {
                "id": 1,
                "name": "TKIYU32"
            },
            {
                "id": 2,
                "name": "TK9528L"
            },
            {
                "id": 3,
                "name": "TK1434N"
            },
            {
                "id": 4,
                "name": "TK8740M"
            },
            {
                "id": 5,
                "name": "TK3740H"
            },
            {
                "id": 6,
                "name": "TK9242J"
            },
            {
                "id": 7,
                "name": "TK3619R"
            },
            {
                "id": 8,
                "name": "TKI 04544"
            }
        ];
    }
    CarService.prototype.getCars = function () {
        return this.cars;
    };
    CarService.prototype.getCar = function (id) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id == id) {
                return this.cars[i];
            }
        }
        return -1;
    };
    CarService.prototype.delete = function (id) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id == id) {
                this.cars.splice(i, 1);
                break;
            }
        }
    };
    CarService.prototype.add = function (value) {
        this.cars.push({
            "id": Math.floor(Math.random() * (100 - 1)) + 1,
            "name": value
        });
    };
    CarService.prototype.edit = function (id, name) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id == id) {
                this.cars[i].name = name;
                break;
            }
        }
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLElBQWEsVUFBVTtJQUlqQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUjtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxNQUFNLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNJLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxXQUFXO2FBQ3RCO1NBRUosQ0FBQztJQUNOLENBQUM7SUFHTyw0QkFBTyxHQUFkO1FBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDJCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsS0FBYTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDVjtZQUNJLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDL0MsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLHlCQUFJLEdBQVgsVUFBWSxFQUFVLEVBQUUsSUFBWTtRQUNoQyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUFuRkQsSUFtRkM7QUFuRlksVUFBVTtJQUR0QixpQkFBVSxFQUFFOztHQUNBLFVBQVUsQ0FtRnRCO0FBbkZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhciB9IGZyb20gXCIuLi9kb21haW4vY2FyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHsgXHJcblxyXG4gICAgICBwcml2YXRlIGNhcnM6IEFycmF5PGFueT47XHJcblxyXG4gIMKgwqDCoMKgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG7CoMKgwqDCoMKgwqDCoMKgdGhpcy5jYXJzID0gW1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiAxLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLSVlVMzJcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiAyLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLOTUyOExcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiAzLFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLMTQzNE5cIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiA0LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLODc0ME1cIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiA1LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLMzc0MEhcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiA2LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLOTI0MkpcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiA3LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLMzYxOVJcIlxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB9LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJpZFwiOiA4LFxyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwibmFtZVwiOiBcIlRLSSAwNDU0NFwiXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH1cclxuXHJcbsKgwqDCoMKgwqDCoMKgwqBdO1xyXG7CoMKgwqDCoH1cclxuXHJcbiBcclxuIMKgwqDCoMKgcHVibGljIGdldENhcnMoKTogQXJyYXk8YW55PiB7XHJcbsKgwqDCoMKgwqDCoMKgwqByZXR1cm4gdGhpcy5jYXJzO1xyXG7CoMKgwqDCoH1cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgZ2V0Q2FyKGlkOiBudW1iZXIpOiBhbnkge1xyXG7CoMKgwqDCoMKgwqDCoMKgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2Fycy5sZW5ndGg7IGkrKykge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBpZih0aGlzLmNhcnNbaV0uaWQgPT0gaWQpIHsgXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgcmV0dXJuIHRoaXMuY2Fyc1tpXTtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfVxyXG7CoMKgwqDCoMKgwqDCoMKgfVxyXG7CoMKgwqDCoMKgwqDCoMKgcmV0dXJuIC0xO1xyXG7CoMKgwqDCoH1cclxuwqBcclxuwqDCoMKgwqBwdWJsaWMgZGVsZXRlKGlkOiBudW1iZXIpIHtcclxuwqDCoMKgwqDCoMKgwqDCoGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcnMubGVuZ3RoOyBpKyspIHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgaWYodGhpcy5jYXJzW2ldLmlkID09IGlkKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgdGhpcy5jYXJzLnNwbGljZShpLCAxKTtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBicmVhaztcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgfSBcclxuwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqB9XHJcbsKgXHJcbsKgwqDCoMKgcHVibGljIGFkZCh2YWx1ZTogc3RyaW5nKSB7XHJcbsKgwqDCoMKgwqDCoMKgwqB0aGlzLmNhcnMucHVzaChcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFwiaWRcIjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMCAtIDEpKSArIDEsXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXCJuYW1lXCI6IHZhbHVlXHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqDCoMKgwqDCoCk7XHJcbsKgwqDCoMKgfVxyXG7CoFxyXG7CoMKgwqDCoHB1YmxpYyBlZGl0KGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZykge1xyXG7CoMKgwqDCoMKgwqDCoMKgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2Fycy5sZW5ndGg7IGkrKykge1xyXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBpZih0aGlzLmNhcnNbaV0uaWQgPT0gaWQpIHtcclxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqB0aGlzLmNhcnNbaV0ubmFtZSA9IG5hbWU7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgYnJlYWs7XHJcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqDCoMKgwqDCoH1cclxuwqDCoMKgwqB9XHJcblxyXG59ICJdfQ==