import {Component, ViewChild} from '@angular/core'
import {TopicsSearchService} from "../shared/topics-search.service";
import {TopicsSearchRequest} from "../shared/topics-search-request";
import {TopicsSearchResponse} from "../shared/topics-search-response";
import {TopicsListComponent} from "../topics-list.component/topics-list.component";
import {Topic} from "../shared/topic";

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

    searchTextHandler(searchText:string){
        let request=new TopicsSearchRequest(searchText);
        this.topicsSearchService.search(request).subscribe(
            (response:TopicsSearchResponse)=>{
                this.lastSearchRequest=response.request;
                let topics:Topic[]=response.topicsFound;
                this.topicsList.init(response.topicsFound,response.totalFound,request.topicSearchText);
            });
    }
}