import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {ArticleListResponse} from "./article-list-response";
import {ArticleListRequest} from "./article-list-request";
import {TopicInfo} from "../topic-info";
import {NewsSourceArticles} from "../news-source-articles";

@Injectable()
export class ArticleListService{
    constructor(private http:Http){

    }

    getNewsSourceNames():Observable<string[]>{
        return this.http.get('/assets/edit/news-source-names.edit.json')
            .map((response:Response)=>response.json());
    }
    getArticleList(request:ArticleListRequest):Observable<ArticleListResponse>{
        return this.http.get('/assets/edit/get-article-list.edit.json')
            .map((response:Response)=> response.json());
    }

    getTopicInfoById(topicId:number):Observable<TopicInfo>{
        return this.http.get('/assets/edit/get-topic-info-by-id.edit.json')
          .map((response:Response)=>response.json());
    }
    getTopicArticlesById(topicId:number):Observable<NewsSourceArticles[]>{
      return this.http.get('/assets/edit/get-topic-articles-by-id.edit.json')
        .map((response:Response)=>response.json());
    }
}
