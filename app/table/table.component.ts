import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({ 
  selector: "tab-compnent",
  templateUrl: "./table/table.component.html",

})  

export class TableComponent {
 
    public constructor(private router: Router) {}
 
    public navigateToCar() {
        this.router.navigate(["/cars"]);
    }

} 