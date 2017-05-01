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
var TextSearchComponent = (function () {
    function TextSearchComponent() {
        this.searchRequested = new core_1.EventEmitter();
    }
    TextSearchComponent.prototype.sendRequest = function (topicsSearchText) {
        this.searchRequested.emit(new topics_search_request_1.TopicsSearchRequest(topicsSearchText, 0));
    };
    return TextSearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TextSearchComponent.prototype, "searchRequested", void 0);
TextSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'text-search',
        templateUrl: './search-text.component.html',
        styleUrls: ['./search-text.component.css', '../home.module.css']
    })
], TextSearchComponent);
exports.TextSearchComponent = TextSearchComponent;
//# sourceMappingURL=search-text.component.js.map