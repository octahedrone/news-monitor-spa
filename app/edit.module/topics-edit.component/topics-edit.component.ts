import {Component} from "@angular/core";
import {ArticleListService} from "../shared/article-list.service";

@Component({
    moduleId:module.id,
    templateUrl:'./topics-edit.component.html',
    styleUrls:['./topics-edit.component.css'],
    providers:[ArticleListService]
})
export class TopicsEditComponent{
    constructor(private articleListService:ArticleListService ){

    }


}