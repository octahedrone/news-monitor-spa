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
var topics_search_service_1 = require("../shared/topics-search.service");
var topics_list_component_1 = require("../topics-list.component/topics-list.component");
var TopicsSearchComponent = (function () {
    function TopicsSearchComponent(topicsSearchService) {
        this.topicsSearchService = topicsSearchService;
    }
    TopicsSearchComponent.prototype.searchTextHandler = function (request) {
        var _this = this;
        this.topicsSearchService.search(request).subscribe(function (response) {
            _this.lastSearchRequest = response.request;
            _this.topicsList.init(response.topicsFound, response.totalFound, response.request.topicSearchText);
        });
    };
    TopicsSearchComponent.prototype.nextPageRequestedHandler = function (request) {
        var _this = this;
        this.topicsSearchService.search(request).subscribe(function (response) {
            _this.lastSearchRequest = response.request;
            _this.topicsList.topics = response.topicsFound;
        });
    };
    return TopicsSearchComponent;
}());
__decorate([
    core_1.ViewChild(topics_list_component_1.TopicsListComponent),
    __metadata("design:type", topics_list_component_1.TopicsListComponent)
], TopicsSearchComponent.prototype, "topicsList", void 0);
TopicsSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './topics-search.component.html',
        styleUrls: ['./topics-search.component.css', '../home.module.css'],
        providers: [topics_search_service_1.TopicsSearchService]
    }),
    __metadata("design:paramtypes", [topics_search_service_1.TopicsSearchService])
], TopicsSearchComponent);
exports.TopicsSearchComponent = TopicsSearchComponent;
//# sourceMappingURL=topics-search.component.js.map