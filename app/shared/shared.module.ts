import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {HttpModule} from "@angular/http";

import {PagingComponent} from "./paging.component/paging.component";

@NgModule({
    imports:[CommonModule],
    declarations:[PagingComponent],
    exports:[PagingComponent, CommonModule, HttpModule]
})
export class SharedModule{

}