export class ArticleListRequest{
    newsSourceName:string;
    itemsPerPage:number;
    articleNumber:number;
    constructor(newsSourceName:string, articleNumber: number, itemsPerPage?:number){
        this.newsSourceName=newsSourceName;
        this.articleNumber=articleNumber;
        this.itemsPerPage=(itemsPerPage)?itemsPerPage:4;
    }
}