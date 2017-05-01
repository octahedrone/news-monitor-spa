import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Article} from "../shared/article";

@Component({
    moduleId:module.id,
    selector:'article-list-item',
    templateUrl:'./article-list-item.component.html',
    styleUrls:['./article-list-item.component.css']
})
export class ArticleListItemComponent{
    @Input()
    article:Article;
    @Input()
    isChecked:boolean;
    @Output()
    itemChanged=new EventEmitter<Article>();

    onChange(){
            this.itemChanged.emit(this.article);
    }
}