import {TopicsSearchRequest} from './topics-search-request'
import {Topic} from './topic'

export class TopicsSearchResponse{
    request:TopicsSearchRequest;
    topicsFound:Topic[];
    totalFound:number;

    constructor(request:TopicsSearchRequest, topicsFound:Topic[], totalFound:number){
        this.request=request;
        this.topicsFound=topicsFound;
        this.totalFound=totalFound;
    }
}