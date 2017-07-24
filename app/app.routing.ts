import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
 
import { TableComponent } from "./table/table.component";
 
const routes: Routes = [
    { path: "", component: TableComponent, children: [
        { path: "", component: TableComponent },
    ]}
];
 
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }