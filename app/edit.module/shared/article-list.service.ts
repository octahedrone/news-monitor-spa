import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {ArticleListResponse} from "./ArticleListreResponse";
import {ArticleListRequest} from "./article-list-request";
import {createErrorResponse} from "angular-in-memory-web-api";

@Injectable()
export class ArticleListService{
    constructor(private http:Http){

    }

    getArticleList(request:ArticleListRequest):Observable<ArticleListResponse>{
        return this.http.get('')
            .map((response:Response)=> response.json());
    }
}
