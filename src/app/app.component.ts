import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h1>{{title}}</h1>
            <nav>
              <a [routerLink]="['/']"> DashBoard </a>
              <a [routerLink]="['/heroes']"> Hero </a>
            </nav>
            <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
  moduleId: module.id
})
export class AppComponent {
  title = 'app works!';
}
