import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common"
import {HttpModule} from "@angular/http";

//modules
import {HomeRoutingModule} from "./home-routing.module";

//components
import {TopicsSearchComponent} from "./topics-search.component/topics-search.component";
import {TextSearchComponent} from "./search-text.component/search-text.component";
import {TopicsListComponent} from "./topics-list.component/topics-list.component";
import {TopicListItemComponent} from "./topic-list-item.component/topic-list-item.component";
import {PagingComponent} from "../shared/paging.component/paging.component";

@NgModule({
    imports:[CommonModule,HomeRoutingModule,HttpModule],
    declarations:[TopicsSearchComponent,TextSearchComponent,TopicsListComponent,TopicListItemComponent, PagingComponent],
})
export class HomeModule{

}