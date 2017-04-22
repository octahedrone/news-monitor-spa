import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

import {TopicsSearchRequest} from './topics-search-request'
import {TopicsSearchResponse} from "./topics-search-response";

@Injectable()
export class TopicsSearchService{
    constructor(private http:Http){

    }

    search(request:TopicsSearchRequest):Observable<TopicsSearchResponse>{
        return this.http.get('get-topics.json')
            .map((response:Response)=>{
                return response.json();
        });
    }
}