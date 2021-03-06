import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId:module.id,
    selector:'paging',
    templateUrl:'./paging.component.html',
    styleUrls:['./paging.component.css']
})
export class PagingComponent implements OnInit,OnChanges{
    @Input()
    offset:number=0;//current page
    @Input()
    limit:number=1;//items per page
    @Input()
    size:number=1;//items array length
    @Input()
    range:number=2;//number of pages

    currentPage: number;
    totalPages: number;
    pages: Observable<number[]>;

    @Output()
    pageChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(){

    }

    ngOnInit(){
        this.getPages(this.offset, this.limit, this.size);
    }

    ngOnChanges(){
        this.getPages(this.offset, this.limit, this.size);
    }

    selectPage(page: number, event:any) {
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    }

    cancelEvent(event:any) {
        event.preventDefault();
    }

    getPages(offset: number, limit: number, size: number) {
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);
        this.pages = Observable.range(-this.range, this.range * 2 + 1)
            .map(offset => this.currentPage + offset)
            .filter(page => this.isValidPageNumber(page, this.totalPages))
            .toArray();
    }

    getCurrentPage(offset: number, limit: number): number {
        return Math.floor(offset / limit) + 1;
    }

    getTotalPages(limit: number, size: number): number {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    }

    isValidPageNumber(page: number, totalPages: number): boolean {
        return page > 0 && page <= totalPages;
    }

}