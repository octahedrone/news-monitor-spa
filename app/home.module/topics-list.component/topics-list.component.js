"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var topics_search_request_1 = require("../shared/topics-search-request");
var TopicsListComponent = (function () {
    function TopicsListComponent() {
        this.nextPageRequested = new core_1.EventEmitter();
        this.count = 0; //topics array length
        this.limit = 7; // how many items we want to choose
    }
    TopicsListComponent.prototype.init = function (topics, count, searchText) {
        this.topics = topics;
        this.count = count;
        this.offset = 0;
        this.searchText = searchText;
        /*this.topicsToView=this.topicsTotal.slice(this.offset,this.offset+this.limit);*/
    };
    TopicsListComponent.prototype.onPageChange = function (offset) {
        this.offset = offset;
        /* this.findAll(offset, this.limit);*/
        /* this.topicsToView=this.topicsTotal.slice(offset,offset+this.limit);*/
        this.nextPageRequested.emit(new topics_search_request_1.TopicsSearchRequest(this.searchText, offset));
    };
    return TopicsListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TopicsListComponent.prototype, "nextPageRequested", void 0);
TopicsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'topics-list',
        templateUrl: './topics-list.component.html',
        styleUrls: ['./topics-list.component.css', '../home.module.css']
    })
], TopicsListComponent);
exports.TopicsListComponent = TopicsListComponent;
//# sourceMappingURL=topics-list.component.js.map