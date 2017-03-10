import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'gosoft-root',
  templateUrl: './gosoft.component.html',
  styleUrls : ['gosoft.component.css']
})
export class GosoftComponent implements OnInit {
    
    heroes: Hero[];
    title = 'Gosoft Component!';
    selectedHero: Hero;
    heroService: HeroService;
 
    ngOnInit(): void {
        this.heroService = new HeroService();
        this.heroes = this.heroService.getHero();
    }

    doSomething(hero): void {
      console.log("click " + hero.name);
      this.selectedHero = hero;
    }
}