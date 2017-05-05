import {Component, EventEmitter, Output} from '@angular/core'
import {TopicsSearchRequest} from "../shared/topics-search-request";

@Component({
    moduleId:module.id,
    selector:'text-search',
    templateUrl:'./search-text.component.html',
    styleUrls:['./search-text.component.css','../home.module.css']
})
export class TextSearchComponent{
    @Output()
    searchRequested=new EventEmitter<TopicsSearchRequest>();

    sendRequest(topicsSearchText:string){
        this.searchRequested.emit(new TopicsSearchRequest(topicsSearchText,0));
    }
}