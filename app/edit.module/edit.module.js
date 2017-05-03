"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//modules
var edit_routing_module_1 = require("./edit-routing.module");
var shared_module_1 = require("../shared/shared.module");
//components
var topics_edit_component_1 = require("./topics-edit.component/topics-edit.component");
var article_list_component_1 = require("./article-list.component/article-list.component");
var article_list_item_component_1 = require("./article-list-item.component/article-list-item.component");
var forms_1 = require("@angular/forms");
var EditModule = (function () {
    function EditModule() {
    }
    return EditModule;
}());
EditModule = __decorate([
    core_1.NgModule({
        imports: [edit_routing_module_1.EditRoutingModule, shared_module_1.SharedModule, forms_1.FormsModule],
        declarations: [topics_edit_component_1.TopicsEditComponent, article_list_component_1.ArticleListComponent, article_list_item_component_1.ArticleListItemComponent]
    })
], EditModule);
exports.EditModule = EditModule;
//# sourceMappingURL=edit.module.js.map