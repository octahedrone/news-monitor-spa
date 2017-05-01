export class TopicsSearchRequest{
    topicSearchText:string;
    itemsPerPage:number;
    articleNumber:number;

    constructor(topicsSearchText:string, articleNumber:number,itemsPerPage?:number){
        this.topicSearchText=topicsSearchText;
        this.articleNumber=articleNumber;
        this.itemsPerPage=(itemsPerPage)?itemsPerPage:7;
    }
}