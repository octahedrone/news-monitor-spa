import {PageInfo} from '../../shared/paging.component/page-info'

export class TopicsSearchRequest{
    nameSearchPattern:string;
    private page: PageInfo;

    constructor(topicsSearchText:string, articleNumber:number,itemsPerPage?:number){
        this.nameSearchPattern=topicsSearchText;
        this.page=new PageInfo();
        this.page.itemsPerPage=(itemsPerPage)?itemsPerPage:7;
        this.page.pageNumber=articleNumber/this.page.itemsPerPage;
    }
}
