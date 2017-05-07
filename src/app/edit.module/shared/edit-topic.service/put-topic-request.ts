import {Topic} from "../topic";
export class PutTopicRequest{
  private id:number;
  private topic:Topic;

  constructor(id:number, topic:Topic){
    this.id=id;
    this.topic=topic;
  }
}
