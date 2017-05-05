import {NgModule} from "@angular/core";


//modules
import {HomeRoutingModule} from "./home-routing.module";

//components
import {TopicsSearchComponent} from "./topics-search.component/topics-search.component";
import {TextSearchComponent} from "./search-text.component/search-text.component";
import {TopicsListComponent} from "./topics-list.component/topics-list.component";
import {TopicListItemComponent} from "./topic-list-item.component/topic-list-item.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports:[HomeRoutingModule, SharedModule],
    declarations:[TopicsSearchComponent,TextSearchComponent,TopicsListComponent,TopicListItemComponent],
})
export class HomeModule{

}