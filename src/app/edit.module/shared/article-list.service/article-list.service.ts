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
        return this.http.get('http://localhost:9000/v1/news-sources/names')
            .map((response:Response)=>response.json());
    }
    getArticleList(request:ArticleListRequest):Observable<ArticleListResponse>{
        return this.http.post('http://localhost:9000/v1/news-sources/articles',request)
            .map((response:Response)=> response.json());
    }

    getTopicInfoById(topicId:string):Observable<TopicInfo>{
        return this.http.get('http://localhost:9000/v1/topics/'+topicId+'/info')
          .map((response:Response)=>response.json());
    }
    getTopicArticlesById(topicId:string):Observable<NewsSourceArticles[]>{
      return this.http.get('http://localhost:9000/v1/topics/'+topicId+'/news-sources/articles')
        .map((response:Response)=>response.json());
    }
}
