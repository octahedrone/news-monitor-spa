import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//modules
import {EditRoutingModule} from "./edit-routing.module";
import {SharedModule} from "../shared/shared.module";

//components
import {TopicsEditComponent} from "./topics-edit.component/topics-edit.component";
import {ArticleListComponent} from "./article-list.component/article-list.component";
import {ArticleListItemComponent} from "./article-list-item.component/article-list-item.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:[CommonModule,EditRoutingModule, SharedModule,FormsModule],
    declarations:[TopicsEditComponent, ArticleListComponent,ArticleListItemComponent]
})
export class EditModule{

}