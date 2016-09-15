"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var routing = [
    {
        path: '', component: home_component_1.HomeComponent
    },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.routes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routing.js.map