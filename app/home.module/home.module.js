"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//modules
var home_routing_module_1 = require("./home-routing.module");
//components
var topics_search_component_1 = require("./topics-search.component/topics-search.component");
var search_text_component_1 = require("./search-text.component/search-text.component");
var topics_list_component_1 = require("./topics-list.component/topics-list.component");
var topic_list_item_component_1 = require("./topic-list-item.component/topic-list-item.component");
var shared_module_1 = require("../shared/shared.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
        declarations: [topics_search_component_1.TopicsSearchComponent, search_text_component_1.TextSearchComponent, topics_list_component_1.TopicsListComponent, topic_list_item_component_1.TopicListItemComponent],
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map