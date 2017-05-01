import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {EditTopicRequest} from "./edit-topic-request";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EditTopicService{
    constructor(private http:Http){

    }

    sendData(request:EditTopicRequest){
        let requestJSON=JSON.stringify(request);
        console.log(requestJSON);
        this.http.post('',requestJSON);
    }
}