
import {NewsSourceArticles} from "./news-source-articles";

export class Topic{
    date: string;
    title:string;
    keyword:string;
    description:string;
    articles:NewsSourceArticles[];

    constructor(date:string, title:string, keyword:string, description: string, articles:NewsSourceArticles[]){
        this.date=date;
        this.title=title;
        this.keyword=keyword;
        this.description=description;
        this.articles=articles;
    }

}