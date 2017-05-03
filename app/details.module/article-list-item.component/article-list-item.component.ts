import {Component, Input} from "@angular/core";
import {Article} from "../shared/article";
@Component({
    moduleId:module.id,
    selector:'article-list-item',
    templateUrl:'./article-list-item.component.html',
    styleUrls:['./article-list-item.component.css']
})
export class ArticleListItem{
    @Input()
    article:Article;
}