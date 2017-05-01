import {Topic} from "../topic";

export class EditTopicRequest{
    topic:Topic;

    constructor(topic:Topic){
        this.topic=topic;
    }
}