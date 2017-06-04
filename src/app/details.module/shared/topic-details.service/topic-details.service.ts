import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

import {GetTopicByIdRequest} from "./get-topic-by-id-request";
import {GetTopicByIdResponse} from "./get-topic-by-id-response";
import {GetArticlesRequest} from "./get-articles-request";
import {Article} from "../article";
import {Topic} from "../topic";

@Injectable()
export class TopicDetailsService{
    constructor(private http:Http){

    }

    getTopicById(request:GetTopicByIdRequest):Observable<Topic>{
        return this.http.get('http://localhost:9000/v1/topics/'+request.topicId+'/info')
            .map((response:Response)=>response.json());
    }

    getArticles(topicId,request:GetArticlesRequest):Observable<Article[]>{
        let url: string='http://localhost:9000/v1/topics/'+topicId+'/articles';
        return this.http.post(url,request)
            .map((response:Response)=>response.json());
    }

    getArticlesCountById(request:string):Observable<number>{
        return this.http.get('http://localhost:9000/v1/topics/'+request+'/articles/count')
            .map((response:Response)=>response.json());
    }

}
