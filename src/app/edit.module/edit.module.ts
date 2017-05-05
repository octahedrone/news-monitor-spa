import {NgModule} from "@angular/core";

//modules
import {EditRoutingModule} from "./edit-routing.module";
import {SharedModule} from "../shared/shared.module";

//components
import {TopicsEditComponent} from "./topics-edit.component/topics-edit.component";
import {ArticleListComponent} from "./article-list.component/article-list.component";
import {ArticleListItemComponent} from "./article-list-item.component/article-list-item.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:[EditRoutingModule, SharedModule,FormsModule],
    declarations:[TopicsEditComponent, ArticleListComponent,ArticleListItemComponent]
})
export class EditModule{

}