import {Component, Input} from "@angular/core";
import {Topic} from "../shared/topic";

@Component({
    moduleId:module.id,
    selector:'topic-list-item',
    templateUrl:'./topic-list-item.component.html',
    styleUrls:['./topic-list-item.component.css', '../home.module.css']
})
export class TopicListItemComponent{
    @Input()
    topic:Topic;
}