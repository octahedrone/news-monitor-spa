import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import {Topic} from './topic';

@Component({
    selector: 'news-monitor-spa',
    template: `<div>
                    <p>Дата: {{topic?.Date}}</p>
                    <p>Описание: {{topic?.Description}}</p>
                    <p>Ключевое слово: {{topic?.Keyword}}</p>
                    <p>Заголовок: {{topic?.Title}}</p>
               </div>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    topic: Topic;

    constructor(private httpService: HttpService){}

    ngOnInit(){

        this.httpService.getData().subscribe((data: Response) =>{
            this.topic=data.json()
            console.log(data)
        } );
    }
}