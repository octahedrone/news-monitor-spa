"use strict";
var TopicsSearchResponse = (function () {
    function TopicsSearchResponse(request, topicsFound, totalFound) {
        this.request = request;
        this.topicsFound = topicsFound;
        this.totalFound = totalFound;
    }
    return TopicsSearchResponse;
}());
exports.TopicsSearchResponse = TopicsSearchResponse;
//# sourceMappingURL=topics-search-response.js.map