import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'gosoft-root',
  templateUrl: './gosoft.component.html',
  styleUrls : ['gosoft.component.css'],
  providers : [HeroService]
})
export class GosoftComponent implements OnInit {
    
    heroes: Hero[];
    title = 'Gosoft Component!';
    selectedHero: Hero;
    
    constructor(private service: HeroService) {}

    ngOnInit(): void {
        this.getHero();
    }

    doSomething(hero): void {
      console.log("click " + hero.name);
      this.selectedHero = hero;
    }

    getHero() : void {
      this.service.getHero().then(heroes => this.heroes = heroes);
    }
}