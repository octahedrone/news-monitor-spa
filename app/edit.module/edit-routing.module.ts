import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {TopicsEditComponent} from "./topics-edit.component/topics-edit.component";

@NgModule({
    imports:[
        RouterModule.forChild([
            {path:'edit', component:TopicsEditComponent}
        ])
    ],
    exports:[RouterModule]
})
export class EditRoutingModule{

}