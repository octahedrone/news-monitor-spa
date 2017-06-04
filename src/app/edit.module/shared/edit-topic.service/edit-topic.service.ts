import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {PostTopicRequest} from "./post-topic-request";
import {Observable} from "rxjs/Observable";
import {PutTopicRequest} from "./put-topic-request";

@Injectable()
export class EditTopicService{
    constructor(private http:Http){

    }

    postTopic(request:PostTopicRequest):Observable<number>{
        /*let requestJSON=JSON.stringify(request);
        console.log(requestJSON);*/
        return this.http.post('http://localhost:9000/v1/topics/add',request)
          .map((response:Response)=>response.json());
    }

    putTopic(request:PutTopicRequest):Observable<number>{
        /*let requestJSON=JSON.stringify(request);
        console.log(requestJSON);*/
        return this.http.put('http://localhost:9000/v1/topics/edit',request)
          .map((response:Response)=>response.json());
    }
}
