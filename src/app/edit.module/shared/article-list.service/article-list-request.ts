export class ArticleListRequest{
    newsSourceName:string;
    itemsPerPage:number;
    pageNumber:number;
    constructor(newsSourceName:string, pageNumber: number, itemsPerPage?:number){
        this.newsSourceName=newsSourceName;
        this.pageNumber=pageNumber;
        this.itemsPerPage=(itemsPerPage)?itemsPerPage:4;
    }
}
