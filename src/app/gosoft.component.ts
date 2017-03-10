import { Component } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock.heroes';
import { HeroService } from './hero.service';


@Component({
  selector: 'gosoft-root',
  templateUrl: './gosoft.component.html',
  styleUrls : ['gosoft.component.css'],
  providers : [HeroService]
})
export class GosoftComponent {
    
    heroes: Hero[];
    title = 'Gosoft Component!';
    selectedHero: Hero;
    constructor(private heroService: HeroService) {
        this.heroes = this.heroService.getHero();
    }
    
  //  hero_2: Hero = {id: 2, title: 'Super man'},
    doSomething(hero): void {
      console.log("click " + hero.name);
      this.selectedHero = hero;
    }
}