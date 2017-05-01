"use strict";
var Topic = (function () {
    function Topic(date, title, keyword, description, articles) {
        this.date = date;
        this.title = title;
        this.keyword = keyword;
        this.description = description;
        this.articles = articles;
    }
    return Topic;
}());
exports.Topic = Topic;
//# sourceMappingURL=topic.js.map