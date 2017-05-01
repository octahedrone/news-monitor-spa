import {Component, ViewChild} from '@angular/core'
import {TopicsSearchService} from "../shared/topics-search.service";
import {TopicsSearchRequest} from "../shared/topics-search-request";
import {TopicsSearchResponse} from "../shared/topics-search-response";
import {TopicsListComponent} from "../topics-list.component/topics-list.component";

@Component({
    moduleId:module.id,
    templateUrl:'./topics-search.component.html',
    styleUrls:['./topics-search.component.css','../home.module.css'],
    providers:[TopicsSearchService]
})
export class TopicsSearchComponent{
    lastSearchRequest:TopicsSearchRequest;

    @ViewChild(TopicsListComponent)
    topicsList:TopicsListComponent;

    constructor(private topicsSearchService:TopicsSearchService){

    }

    searchTextHandler(request:TopicsSearchRequest){
        this.topicsSearchService.search(request).subscribe(
            (response:TopicsSearchResponse)=>{
                this.lastSearchRequest=response.request;
                this.topicsList.init(response.topicsFound,response.totalFound,response.request.topicSearchText);
            });
    }

    nextPageRequestedHandler(request:TopicsSearchRequest){
        this.topicsSearchService.search(request).subscribe(
            (response:TopicsSearchResponse)=>{
                this.lastSearchRequest=response.request;
                this.topicsList.topics=response.topicsFound;
            });
    }
}