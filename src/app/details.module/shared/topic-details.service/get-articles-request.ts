export class GetArticlesRequest{
    private itemsPerPage:number;
    offset:number;

    constructor( offset: number,itemsPerPage:number){
        this.offset=offset;
        this.itemsPerPage=itemsPerPage;
    }
}
