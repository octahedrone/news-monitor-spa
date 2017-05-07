import {Component, OnInit, ViewChild} from "@angular/core";
import {ArticleListService} from "../shared/article-list.service/article-list.service";
import {EditTopicService} from "../shared/edit-topic.service/edit-topic.service";
import {ArticleListComponent} from "../article-list.component/article-list.component";
import {ArticleListRequest} from "../shared/article-list.service/article-list-request";
import {ArticleListResponse} from "../shared/article-list.service/article-list-response";
import {Topic} from "../shared/topic";
import { NgForm} from '@angular/forms';
import {PostTopicRequest} from "../shared/edit-topic.service/post-topic-request";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TopicInfo} from "../shared/topic-info";
import {PutTopicRequest} from "../shared/edit-topic.service/put-topic-request";
import {NewsSourceArticles} from "../shared/news-source-articles";

@Component({
    moduleId:module.id,
    templateUrl:'./topics-edit.component.html',
    styleUrls:['./topics-edit.component.css'],
    providers:[ArticleListService, EditTopicService]
})
export class TopicsEditComponent implements OnInit{
    @ViewChild(ArticleListComponent)
    articleListComponent: ArticleListComponent;
    lastArticleListRequest:ArticleListRequest;
    topicId:number;
    topicInfo:TopicInfo;

    constructor(private articleListService:ArticleListService,
                private editTopicService:EditTopicService, private router: Router,
                private activatedRouter:ActivatedRoute){
      this.topicInfo=new TopicInfo();
    }

    ngOnInit(){
      this.activatedRouter.params.forEach((params: Params)=>{
          this.topicId=+params["id"];
          if(!isNaN(this.topicId))
            this.articleListService.getTopicInfoById(this.topicId)
              .subscribe((response:TopicInfo)=>this.topicInfo=response);
      })
    }

    articleListOnInitHandler(){
      this.articleListService.getNewsSourceNames()
        .subscribe((response:string[])=>this.articleListComponent.newsSources=response);

      if(!isNaN(this.topicId))
        this.articleListService.getTopicArticlesById(this.topicId)
          .subscribe((response:NewsSourceArticles[])=>this.articleListComponent.newsSourceCheckedArticles=response);
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

    onSubmit(){
        let topic:Topic=new Topic(this.topicInfo,this.articleListComponent.newsSourceCheckedArticles);
        if(this.topicId){
          this.editTopicService.putTopic(new PutTopicRequest(this.topicId,topic));
          this.router.navigate(['/details',this.topicId]);
        }
        else{
          this.editTopicService.postTopic(new PostTopicRequest(topic));
          this.router.navigate(['/home']);
        }
    }
}
