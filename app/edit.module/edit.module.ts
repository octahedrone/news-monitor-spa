import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//modules
import {EditRoutingModule} from "./edit-routing.module";

//components
import {TopicsEditComponent} from "./topics-edit.component/topics-edit.component";
import {ArticleListComponent} from "./article-list.component/article-list.component";
import {ArticleListItemComponent} from "./article-list-item.component/article-list-item.component";
import {PagingComponent} from "../shared/paging.component/paging.component";

@NgModule({
    imports:[CommonModule,EditRoutingModule],
    declarations:[TopicsEditComponent, ArticleListComponent,ArticleListItemComponent,PagingComponent]
})
export class EditModule{

}