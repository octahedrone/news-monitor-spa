"use strict";
var ArticleListRequest = (function () {
    function ArticleListRequest(newsSourceName, articleNumber, itemsPerPage) {
        this.newsSourceName = newsSourceName;
        this.articleNumber = articleNumber;
        this.itemsPerPage = (itemsPerPage) ? itemsPerPage : 4;
    }
    return ArticleListRequest;
}());
exports.ArticleListRequest = ArticleListRequest;
//# sourceMappingURL=article-list-request.js.map