import {NgModule} from "@angular/core";
import {TopicDetailsComponent} from "./topic-details.component/topic-details.component";
import {SharedModule} from "../shared/shared.module";
import {DetailsRoutingModule} from "./details-routing.module";
import {ArticleListComponent} from "./article-list.component/article-list.component";
import {ArticleListItem} from "./article-list-item.component/article-list-item.component";
@NgModule({
    imports:[SharedModule,DetailsRoutingModule],
    declarations:[TopicDetailsComponent, ArticleListComponent,ArticleListItem]
})
export class DetailsModule{

}