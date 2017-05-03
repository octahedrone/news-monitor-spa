export class GetArticlesRequest{
    private topicId:number;
    private itemsPerPage:number;
    offset:number;

    constructor(topicId:number, offset: number,itemsPerPage:number){
        this.topicId=topicId;
        this.offset=offset;
        this.itemsPerPage=itemsPerPage;
    }
}