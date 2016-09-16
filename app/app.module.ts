import {NgModule} from "@angular/core";
import {FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {WidgetOne} from "./widgets/widget-one.component";
import {WidgetsModule} from "./widgets/widgets.module";
import {HomeModule} from "./home/home.module";
import {AboutModule} from './about/about.module';
import {ServicesModule} from "./services/services.module";
import {ContactComponent} from './contact/contact.component';

import {TodoModule} from './todo/todo.module';


import {routes} from "./app.routing";


@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, HomeModule, AboutModule, TodoModule, ServicesModule.forRoot(), routes],
    declarations: [AppComponent, ContactComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}

