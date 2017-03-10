import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['/']"> DashBoard </a>
            <a [routerLink]="['/heroes']"> Hero </a>
            <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app works!';
}
