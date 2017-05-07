import {Topic} from "../topic";

export class PostTopicRequest{
    topic:Topic;

    constructor(topic:Topic){
        this.topic=topic;
    }
}
