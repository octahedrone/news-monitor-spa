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
var article_list_service_1 = require("../shared/article-list.service/article-list.service");
var edit_topic_service_1 = require("../shared/edit-topic.service/edit-topic.service");
var article_list_component_1 = require("../article-list.component/article-list.component");
var topic_1 = require("../shared/topic");
var edit_topic_request_1 = require("../shared/edit-topic.service/edit-topic-request");
var router_1 = require("@angular/router");
var TopicsEditComponent = (function () {
    function TopicsEditComponent(articleListService, editTipicService, router) {
        this.articleListService = articleListService;
        this.editTipicService = editTipicService;
        this.router = router;
    }
    TopicsEditComponent.prototype.articleListRequestedHandler = function (request) {
        var _this = this;
        this.articleListService.getArticleList(request).subscribe(function (response) {
            _this.lastArticleListRequest = response.request;
            _this.articleListComponent.articleList = response.articleList;
            _this.articleListComponent.count = response.articlesCount;
            _this.articleListComponent.offset = 0;
        });
    };
    TopicsEditComponent.prototype.newPageRequestedHandler = function (request) {
        var _this = this;
        this.articleListService.getArticleList(request).subscribe(function (response) {
            _this.lastArticleListRequest = response.request;
            _this.articleListComponent.articleList = response.articleList;
        });
    };
    TopicsEditComponent.prototype.onSubmit = function (form) {
        var topic = new topic_1.Topic(form.value.date, form.value.title, form.value.keyword, form.value.description, this.articleListComponent.newsSourceCheckedArticles);
        this.editTipicService.sendData(new edit_topic_request_1.EditTopicRequest(topic));
        this.router.navigate(['/home']);
    };
    return TopicsEditComponent;
}());
__decorate([
    core_1.ViewChild(article_list_component_1.ArticleListComponent),
    __metadata("design:type", article_list_component_1.ArticleListComponent)
], TopicsEditComponent.prototype, "articleListComponent", void 0);
TopicsEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './topics-edit.component.html',
        styleUrls: ['./topics-edit.component.css'],
        providers: [article_list_service_1.ArticleListService, edit_topic_service_1.EditTopicService]
    }),
    __metadata("design:paramtypes", [article_list_service_1.ArticleListService,
        edit_topic_service_1.EditTopicService, router_1.Router])
], TopicsEditComponent);
exports.TopicsEditComponent = TopicsEditComponent;
//# sourceMappingURL=topics-edit.component.js.map