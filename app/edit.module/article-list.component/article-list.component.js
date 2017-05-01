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
var news_source_articles_1 = require("../shared/news-source-articles");
var article_list_request_1 = require("../shared/article-list.service/article-list-request");
var article_list_service_1 = require("../shared/article-list.service/article-list.service");
var ArticleListComponent = (function () {
    function ArticleListComponent(service) {
        this.service = service;
        this.articleRequested = new core_1.EventEmitter();
        this.newPageRequested = new core_1.EventEmitter();
        this.count = 0; //topics array length
        this.limit = 4; // how many items we want to choose
        this.newsSourceCheckedArticles = [];
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getNewsSourceNames().subscribe(function (response) { return _this.newsSources = response; });
    };
    ArticleListComponent.prototype.onNewsSourceSelect = function (newsSourceName) {
        this.articleRequested.emit(new article_list_request_1.ArticleListRequest(newsSourceName, 0));
    };
    ArticleListComponent.prototype.onPageChange = function (offset) {
        this.offset = offset;
        this.newPageRequested.emit(new article_list_request_1.ArticleListRequest(this.articleList.newsSourceName, offset));
    };
    ArticleListComponent.prototype.handlerItemChanged = function (article) {
        var nsName = this.articleList.newsSourceName;
        var currentNS = this.newsSourceCheckedArticles.find(function (nsa) { return nsa.newsSourceName == nsName; });
        if (currentNS) {
            var currentArticle = currentNS.articles.find(function (item) { return item.id == article.id; });
            if (currentArticle) {
                var articleIndex = currentNS.articles.indexOf(currentArticle);
                currentNS.articles.splice(articleIndex, 1);
            }
            else
                currentNS.articles.push(article);
        }
        else {
            var nsa = new news_source_articles_1.NewsSourceArticles();
            nsa.newsSourceName = nsName;
            nsa.articles = [];
            nsa.articles.push(article);
            this.newsSourceCheckedArticles.push(nsa);
        }
    };
    ArticleListComponent.prototype.isArticleChecked = function (article) {
        var nsName = this.articleList.newsSourceName;
        var nsa = this.newsSourceCheckedArticles.find(function (nsa) { return nsa.newsSourceName == nsName; });
        var result = false;
        if (nsa)
            result = !!(nsa.articles.find(function (item) { return item.id == article.id; }));
        return result;
    };
    return ArticleListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ArticleListComponent.prototype, "articleRequested", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ArticleListComponent.prototype, "newPageRequested", void 0);
ArticleListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'article-list',
        templateUrl: './article-list.component.html',
        styleUrls: ['./article-list.component.css'],
        providers: [article_list_service_1.ArticleListService]
    }),
    __metadata("design:paramtypes", [article_list_service_1.ArticleListService])
], ArticleListComponent);
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=article-list.component.js.map