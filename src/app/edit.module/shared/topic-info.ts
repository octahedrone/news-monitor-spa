export class TopicInfo{
  id: string;
  date: string;
  title:string;
  keyword:string;
  description:string;

  constructor(date?:string, title?:string, keyword?:string, description?: string)
  {
    this.date=(date)?date:Date.now().toString();
    this.title=(title)?title:"";
    this.keyword=(keyword)?keyword:"";
    this.description=(description)?description:"";
  }
}
