import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <nav>
        <a routerLink="">Home</a>
        <a routerLink="contact">Contact</a>
        <a routerLink="todo">Todos</a>
</nav>
<router-outlet></router-outlet>`
})
export class AppComponent{}