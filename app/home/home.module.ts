import  {NgModule} from '@angular/core';
import  {HomeComponent} from './home.component';
import {WidgetsModule} from "../widgets/widgets.module";
import {WidgetOne} from "../widgets/widget-one.component";


@NgModule({
    imports: [WidgetsModule],
    declarations: [HomeComponent],
    exports:[HomeComponent]
})
export  class HomeModule{}