import {Component, OnInit} from "@angular/core";
import {ActivatedRoute,Params} from "@angular/router";
import {TopicDetailsService} from "../shared/topic-details.service/topic-details.service";
import {Topic} from "../shared/topic";
import {GetTopicByIdRequest} from "../shared/topic-details.service/get-topic-by-id-request";
import {GetTopicByIdResponse} from "../shared/topic-details.service/get-topic-by-id-response";

@Component({
    moduleId:module.id,
    templateUrl:'./topic-details.component.html',
    styleUrls:['./topic-details.component.css'],
    providers:[TopicDetailsService]
})
export class TopicDetailsComponent implements OnInit{
    private topic:Topic;

    constructor(private activatedRoute: ActivatedRoute, private topicDetailsService: TopicDetailsService){

    }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.topicDetailsService.getTopicById(new GetTopicByIdRequest(id))
                .subscribe((response:GetTopicByIdResponse)=>{
                    this.topic=response.topic;
                })
        });
    }
}