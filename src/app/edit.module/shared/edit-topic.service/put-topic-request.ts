import {Topic} from "../topic";
export class PutTopicRequest{
  private id:string;
  private topic:Topic;

  constructor(id:string, topic:Topic){
    this.id=id;
    this.topic=topic;
  }
}
