import {Component, EventEmitter, Output} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:'text-search',
    templateUrl:'./text-search.component.html',
    styleUrls:['./text-search.component.css','../home.module.css']
})
export class TextSearchComponent{
    @Output()
    searchRequested=new EventEmitter<string>();

    clickHandler(topicsSearchText:string){
        this.searchRequested.emit(topicsSearchText);
    }
}