import {ArticleListRequest} from "./article-list-request";
import {Article} from "./Article";

export class ArticleListResponse{
    request:ArticleListRequest;
    articleFound:Article[];
    totalFound:number;
}