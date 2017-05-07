import {NewsSourceArticles} from "./news-source-articles";
import {TopicInfo} from "./topic-info";

export class Topic{
    info:TopicInfo;
    articles:NewsSourceArticles[];

    constructor(info:TopicInfo, articles:NewsSourceArticles[]){
        this.info=info;
        this.articles=articles;
    }

}
