import {ArticleListRequest} from "./article-list-request";
import {NewsSourceArticles} from "../news-source-articles";

export class ArticleListResponse{
    request:ArticleListRequest;
    articleList:NewsSourceArticles;
    articlesCount:number;
}