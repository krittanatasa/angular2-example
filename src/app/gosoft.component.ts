import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Component({
  selector: 'gosoft-root',
  templateUrl: './gosoft.component.html',
  styleUrls : ['gosoft.component.css']
})
export class GosoftComponent {
  
    title = 'Gosoft Component!';
    selectedHero: Hero;

    heroes = HEROES;
  //  hero_2: Hero = {id: 2, title: 'Super man'},
    doSomething(hero): void {
      console.log("click " + hero.name);
      this.selectedHero = hero;
    }
}