import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {PostTopicRequest} from "./post-topic-request";
import {Observable} from "rxjs/Observable";
import {PutTopicRequest} from "./put-topic-request";

@Injectable()
export class EditTopicService{
    constructor(private http:Http){

    }

    postTopic(request:PostTopicRequest){
        let requestJSON=JSON.stringify(request);
        console.log(requestJSON);
        this.http.post('',requestJSON);
    }

    putTopic(request:PutTopicRequest){
        let requestJSON=JSON.stringify(request);
        console.log(requestJSON);
        this.http.post('',requestJSON);
    }
}
