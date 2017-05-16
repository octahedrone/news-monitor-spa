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
        return this.http.post('http://localhost:9000/v1/topics/search', request)
            .map((response:Response)=>{
                console.log(response.json());
                return response.json();
        });
    }
}
