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
var Observable_1 = require("rxjs/Observable");
var PagingComponent = (function () {
    function PagingComponent() {
        this.offset = 0; //current page
        this.limit = 1; //items per page
        this.size = 1; //items array length
        this.range = 2; //number of pages
        this.pageChange = new core_1.EventEmitter();
    }
    PagingComponent.prototype.ngOnInit = function () {
        this.getPages(this.offset, this.limit, this.size);
    };
    PagingComponent.prototype.ngOnChanges = function () {
        this.getPages(this.offset, this.limit, this.size);
    };
    PagingComponent.prototype.selectPage = function (page, event) {
        this.cancelEvent(event);
        if (this.isValidPageNumber(page, this.totalPages)) {
            this.pageChange.emit((page - 1) * this.limit);
        }
    };
    PagingComponent.prototype.cancelEvent = function (event) {
        event.preventDefault();
    };
    PagingComponent.prototype.getPages = function (offset, limit, size) {
        var _this = this;
        this.currentPage = this.getCurrentPage(offset, limit);
        this.totalPages = this.getTotalPages(limit, size);
        this.pages = Observable_1.Observable.range(-this.range, this.range * 2 + 1)
            .map(function (offset) { return _this.currentPage + offset; })
            .filter(function (page) { return _this.isValidPageNumber(page, _this.totalPages); })
            .toArray();
    };
    PagingComponent.prototype.getCurrentPage = function (offset, limit) {
        return Math.floor(offset / limit) + 1;
    };
    PagingComponent.prototype.getTotalPages = function (limit, size) {
        return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
    };
    PagingComponent.prototype.isValidPageNumber = function (page, totalPages) {
        return page > 0 && page <= totalPages;
    };
    return PagingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "offset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "limit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PagingComponent.prototype, "range", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PagingComponent.prototype, "pageChange", void 0);
PagingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'paging',
        templateUrl: './paging.component.html',
        styleUrls: ['./paging.component.css']
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);
exports.PagingComponent = PagingComponent;
//# sourceMappingURL=paging.component.js.map