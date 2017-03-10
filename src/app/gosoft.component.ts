import { Component } from '@angular/core';

@Component({
  selector: 'gosoft-root',
  template: `<h1>GOSOFT</h1> <h1>{{title}}</h1>
            <h2>{{hero.title}}</h2>`
})
export class GosoftComponent {
    title = 'Gosoft Component!';
    //titie_2 = 'test';
    hero: Hero = new Hero(1, 'Iron Man')
  //  hero_2: Hero = {id: 2, title: 'Super man'}
}

class Hero {
  constructor(private id: number, private title: string) {}
}
