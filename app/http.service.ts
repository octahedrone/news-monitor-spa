import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{

    private url='http://localhost:9000/topics/1'
    constructor(private http: Http){ }


    getData(){
        return this.http.get(this.url)
    }
}