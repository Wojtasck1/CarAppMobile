import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { CarsComponent } from "./cars/cars.component";
import { CarComponent } from "./car/car.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
    { path: "", component: AppComponent,
        children: [
            { path: "", component: TableComponent },
            { path: "cars", component: CarsComponent }, 
            { path: "car/:id", component: CarComponent},
        ] 
    },
//    { path: "otherparent", component: OtherParentComponent }
];
   
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})  
export class AppRoutingModule { }     