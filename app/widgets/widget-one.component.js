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
var WidgetOne = (function () {
    function WidgetOne() {
        this.selected = false;
    }
    WidgetOne.prototype.onInit = function () {
        console.log("i am called");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WidgetOne.prototype, "msg", void 0);
    WidgetOne = __decorate([
        core_1.Component({
            selector: 'widget-one',
            styles: ["\n    *{\n        font-family:\"Times New Roman\";\n    }\n    "],
            template: "this is a shared widget with name one.\n        <div *ngIf=\"selected\" >hello</div>\n        <h4>{{msg}}</h4>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetOne);
    return WidgetOne;
}());
exports.WidgetOne = WidgetOne;
//# sourceMappingURL=widget-one.component.js.map