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
var widget_one_component_1 = require("./widget-one.component");
var common_1 = require("@angular/common");
var widget_two_component_1 = require("./widget-two.component");
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [widget_one_component_1.WidgetOne, widget_two_component_1.WidgetTwo],
            exports: [widget_one_component_1.WidgetOne, widget_two_component_1.WidgetTwo, common_1.CommonModule]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetsModule);
    return WidgetsModule;
}());
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map