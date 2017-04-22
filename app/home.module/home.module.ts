import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {HttpModule} from "@angular/http";

//modules
import {HomeRoutingModule} from "./home-routing.module";

//components
import {TopicsSearchComponent} from "./topics-search.component/topics-search.component";
import {TextSearchComponent} from "./search-text.component/text-search.component";
import {TopicsListComponent} from "./topics-list.component/topics-list.component";
import {PagingComponent} from "./paging.component/paging.component";
import {TopicListItemComponent} from "./topic-list-item.component/topic-list-item.component";

@NgModule({
    imports:[CommonModule,HomeRoutingModule,HttpModule],
    declarations:[TopicsSearchComponent,TextSearchComponent,TopicsListComponent, PagingComponent,TopicListItemComponent],
})
export class HomeModule{

}