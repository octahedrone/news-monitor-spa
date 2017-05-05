import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {GetTopicByIdRequest} from "./get-topic-by-id-request";
import {GetTopicByIdResponse} from "./get-topic-by-id-response";
import {GetArticlesRequest} from "./get-articles-request";
import {Article} from "../article";

@Injectable()
export class TopicDetailsService{
    constructor(private http:Http){

    }

    getTopicById(request:GetTopicByIdRequest):Observable<GetTopicByIdResponse>{
        return this.http.get('/assets/get-topic-by-id.details.json')
            .map((response:Response)=>response.json());
    }

    getArticles(request:GetArticlesRequest):Observable<Article[]>{
        let url=(request.offset==0)?'/assets/get-articles.details.json':'/assets/get-articles1.details.json';
        return this.http.get(url)
            .map((response:Response)=>response.json());
    }

    getArticlesCountById(request:number):Observable<number>{
        return this.http.get('/assets/get-articles-count-by-id.details.json')
            .map((response:Response)=>response.json());
    }

}
