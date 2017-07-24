import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { CarComponent } from "./car/car.component";

const routes: Routes = [
    { path: "", component: TableComponent,
        children: [
            { path: "", component: TableComponent },
            { path: "car", component: CarComponent },
        ]
    },
//    { path: "otherparent", component: OtherParentComponent }
];
 
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
}) 
export class AppRoutingModule { }