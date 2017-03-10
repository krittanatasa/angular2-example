import { Component } from '@angular/core';

@Component({
  selector: 'gosoft-root',
  template: '<h1>GOSOFT</h1> <h1>{{title}}</h1> <h2>{{titie_2}}</h2>'
})
export class GosoftComponent {
  title = 'Gosoft Component!';
  // titie_2 = 'test';
}
