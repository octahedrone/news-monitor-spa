import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//modules
import {EditRoutingModule} from "./edit-routing.module";

//components
import {TopicsEditComponent} from "./topics-edit.component/topics-edit.component";

@NgModule({
    imports:[CommonModule,EditRoutingModule],
    declarations:[TopicsEditComponent]
})
export class EditModule{

}