import {Component, Output, EventEmitter} from "@angular/core";
import {Topic} from "../shared/topic";
import {TopicsSearchRequest} from "../shared/topics-search-request";

@Component({
    moduleId:module.id,
    selector:'topics-list',
    templateUrl:'./topics-list.component.html',
    styleUrls:['./topics-list.component.css','../home.module.css']
})
export class TopicsListComponent{
    topics:Topic[];
    searchText:string;
    @Output()
    nextPageRequested=new EventEmitter<TopicsSearchRequest>();

    count: number = 0;//topics array length
    offset: number;//number of first item from the (next) page
    limit: number = 7;// how many items we want to choose

    init(topics:Topic[], count:number, searchText:string){
        this.topics=topics;
        this.count=count;
        this.offset=0;
        this.searchText=searchText;
        /*this.topicsToView=this.topicsTotal.slice(this.offset,this.offset+this.limit);*/
    }

    onPageChange(offset:number) {
        this.offset = offset;
       /* this.findAll(offset, this.limit);*/
      /* this.topicsToView=this.topicsTotal.slice(offset,offset+this.limit);*/
        this.nextPageRequested.emit(new TopicsSearchRequest(this.searchText,offset));
    }
}