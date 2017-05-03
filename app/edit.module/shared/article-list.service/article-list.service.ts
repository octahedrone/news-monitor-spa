import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {ArticleListResponse} from "./article-list-response";
import {ArticleListRequest} from "./article-list-request";

@Injectable()
export class ArticleListService{
    constructor(private http:Http){

    }

    getNewsSourceNames():Observable<string[]>{
        return this.http.get('news-source-names.json')
            .map((response:Response)=>response.json());
    }
    getArticleList(request:ArticleListRequest):Observable<ArticleListResponse>{
        return this.http.get('get-article-list.json')
            .map((response:Response)=> response.json());
    }
}
