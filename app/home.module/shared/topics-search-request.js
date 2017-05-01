"use strict";
var TopicsSearchRequest = (function () {
    function TopicsSearchRequest(topicsSearchText, articleNumber, itemsPerPage) {
        this.topicSearchText = topicsSearchText;
        this.articleNumber = articleNumber;
        this.itemsPerPage = (itemsPerPage) ? itemsPerPage : 7;
    }
    return TopicsSearchRequest;
}());
exports.TopicsSearchRequest = TopicsSearchRequest;
//# sourceMappingURL=topics-search-request.js.map