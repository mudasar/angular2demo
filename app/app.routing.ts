import {RouterModule} from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routing = [
    {
        path:'', component:HomeComponent
    },
    { path:'contact', component: ContactComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);