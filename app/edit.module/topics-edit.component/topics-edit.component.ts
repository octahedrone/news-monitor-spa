import { Component, ViewChild} from "@angular/core";
import {ArticleListService} from "../shared/article-list.service/article-list.service";
import {EditTopicService} from "../shared/edit-topic.service/edit-topic.service";
import {ArticleListComponent} from "../article-list.component/article-list.component";
import {ArticleListRequest} from "../shared/article-list.service/article-list-request";
import {ArticleListResponse} from "../shared/article-list.service/article-list-response";
import {Topic} from "../shared/topic";
import { NgForm} from '@angular/forms';
import {EditTopicRequest} from "../shared/edit-topic.service/edit-topic-request";
import {Router} from "@angular/router";

@Component({
    moduleId:module.id,
    templateUrl:'./topics-edit.component.html',
    styleUrls:['./topics-edit.component.css'],
    providers:[ArticleListService, EditTopicService]
})
export class TopicsEditComponent{
    @ViewChild(ArticleListComponent)
    articleListComponent: ArticleListComponent;
    lastArticleListRequest:ArticleListRequest;

    constructor(private articleListService:ArticleListService,
                private editTipicService:EditTopicService, private router: Router){

    }

    articleListRequestedHandler(request:ArticleListRequest){
        this.articleListService.getArticleList(request).subscribe(
            (response:ArticleListResponse)=>{
                this.lastArticleListRequest=response.request;
                this.articleListComponent.articleList=response.articleList;
                this.articleListComponent.count=response.articlesCount;
                this.articleListComponent.offset=0;
            });
    }

    newPageRequestedHandler(request:ArticleListRequest){
        this.articleListService.getArticleList(request).subscribe(
            (response:ArticleListResponse)=>{
                this.lastArticleListRequest=response.request;
                this.articleListComponent.articleList=response.articleList;
            });
    }

    onSubmit(form:NgForm){
        let topic:Topic=new Topic(form.value.date, form.value.title, form.value.keyword, form.value.description, this.articleListComponent.newsSourceCheckedArticles);
        this.editTipicService.sendData(new EditTopicRequest(topic));
        this.router.navigate(['/home']);
    }
}