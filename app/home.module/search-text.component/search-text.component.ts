import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:'text-search',
    templateUrl:'./search-text.component.html',
    styleUrls:['./search-text.component.css','../home.module.css']
})
export class TextSearchComponent{
    @Output()
    searchRequested=new EventEmitter<string>();

    sendRequest(topicsSearchText:string){
        this.searchRequested.emit(topicsSearchText);
    }
}