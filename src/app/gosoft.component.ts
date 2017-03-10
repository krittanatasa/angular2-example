import { Component } from '@angular/core';

@Component({
  selector: 'gosoft-root',
  template: '<h1>GOSOFT</h1> <h1>{{title}}</h1>'
})
export class GosoftComponent {
  title = 'Gosoft Component!';
}
