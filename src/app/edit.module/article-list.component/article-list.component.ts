import {Component, EventEmitter, Output, OnInit} from "@angular/core";
import {NewsSourceArticles} from "../shared/news-source-articles";
import {ArticleListRequest} from "../shared/article-list.service/article-list-request";
import {ArticleListService} from "../shared/article-list.service/article-list.service";
import {Article} from "../shared/article";

@Component({
    moduleId:module.id,
    selector:'article-list',
    templateUrl:'./article-list.component.html',
    styleUrls:['./article-list.component.css'],
    providers:[ArticleListService]
})
export class ArticleListComponent implements OnInit{
    articleList:NewsSourceArticles;
    newsSources:string[];
    newsSourceCheckedArticles:NewsSourceArticles[];
    @Output()
    articleRequested=new EventEmitter<ArticleListRequest>();
    @Output()
    newPageRequested=new EventEmitter<ArticleListRequest>();

    count: number = 0;//topics array length
    offset: number;//number of first item from the (next) page
    limit: number = 4;// how many items we want to choose

    constructor(private service:ArticleListService){
        this.newsSourceCheckedArticles=[];
    }

    ngOnInit(){
        this.service.getNewsSourceNames().subscribe(
            (response:string[])=>this.newsSources=response
        )
    }

    onNewsSourceSelect(newsSourceName:string){
        this.articleRequested.emit(new ArticleListRequest(newsSourceName,0));
    }

    onPageChange(offset:number){
        this.offset = offset;
        this.newPageRequested.emit(new ArticleListRequest(this.articleList.newsSourceName,offset));
    }

    handlerItemChanged(article:Article){
        let nsName=this.articleList.newsSourceName;
        let currentNS:NewsSourceArticles=this.newsSourceCheckedArticles.find((nsa:NewsSourceArticles)=>nsa.newsSourceName==nsName);
        if(currentNS){
            let currentArticle=currentNS.articles.find((item:Article)=>item.id==article.id);
            if(currentArticle){
                let articleIndex=currentNS.articles.indexOf(currentArticle);
                currentNS.articles.splice(articleIndex,1);
            }
            else
                currentNS.articles.push(article);
        }
        else{
            let nsa= new NewsSourceArticles();
            nsa.newsSourceName=nsName;
            nsa.articles=[];
            nsa.articles.push(article);
            this.newsSourceCheckedArticles.push(nsa);
        }
    }

    isArticleChecked(article:Article):boolean{
        let nsName=this.articleList.newsSourceName;
        let nsa=this.newsSourceCheckedArticles.find((nsa:NewsSourceArticles)=>nsa.newsSourceName==nsName);

        let result:boolean=false;
        if(nsa)
            result=!!(nsa.articles.find((item:Article)=>item.id==article.id));
        return result;
    }
}