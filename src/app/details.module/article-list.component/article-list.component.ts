import {Component, Input, OnInit} from "@angular/core";
import {Article} from "../shared/article";
import {TopicDetailsService} from "../shared/topic-details.service/topic-details.service";
import {GetArticlesRequest} from "../shared/topic-details.service/get-articles-request";
@Component({
    moduleId:module.id,
    selector:'article-list',
    templateUrl:'./article-list.component.html',
    styleUrls:['./article-list.component.css'],
    providers:[TopicDetailsService]
})
export class ArticleListComponent implements OnInit{
    @Input()
    topicId: number;
    articles:Article[];
    articleRequest: GetArticlesRequest;

    count:number;
    limit:number;

    constructor(private topicDetailsService:TopicDetailsService){
        this.limit=5;
        let offset=0;
        this.articleRequest=new GetArticlesRequest(this.topicId,offset,this.limit);
    }

    ngOnInit(){
        this.topicDetailsService.getArticles(this.articleRequest)
            .subscribe((response:Article[])=>this.articles=response);

        this.topicDetailsService.getArticlesCountById(this.topicId)
            .subscribe((response:number)=>this.count=response)
    }

    onPageChange(offset:number){
        this.articleRequest.offset=offset;

        this.topicDetailsService.getArticles(this.articleRequest)
            .subscribe((response:Article[])=>this.articles=response);
    }


}