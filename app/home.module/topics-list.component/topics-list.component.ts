import {Component} from "@angular/core";
import {Topic} from "../shared/topic";

@Component({
    moduleId:module.id,
    selector:'topics-list',
    templateUrl:'./topics-list.component.html',
    styleUrls:['./topics-list.component.css','../home.module.css']
})
export class TopicsListComponent{
    private topicsTotal:Topic[];
    topicsToView:Topic[];
    searchText:string;

    count: number = 0;//topics array length
    offset: number;//number of first item from the (next) page
    limit: number = 7;// how many items we want to choose

    init(topics:Topic[], count:number, searchText:string){
        this.topicsTotal=topics;
        this.count=count;
        this.offset=0;
        this.searchText=searchText;
        this.topicsToView=this.topicsTotal.slice(this.offset,this.offset+this.limit);
    }

    onPageChange(offset:number) {
        this.offset = offset;
       /* this.findAll(offset, this.limit);*/
       this.topicsToView=this.topicsTotal.slice(offset,offset+this.limit);
    }
}