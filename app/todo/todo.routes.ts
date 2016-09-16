import {RouterModule} from '@angular/router';
import {TodoComponent} from './todo.component';
import { ModuleWithProviders }  from '@angular/core';

const routing = [
    {
        path:'todo', component:TodoComponent
    }
];

export const todoRoutes:  ModuleWithProviders = RouterModule.forRoot(routing);