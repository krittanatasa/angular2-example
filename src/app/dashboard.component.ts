import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component ({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['gosoft.component.css'],
    providers : [HeroService]
})
export class DashBoard implements OnInit {
    heroes: Hero[];
   // title = 'Gosoft Component!';

    constructor(private service: HeroService) {}

    ngOnInit(): void {
        this.getHero();
    }

    getHero() : void {
      this.service.getHero().then(heroes => this.heroes = heroes.slice(0,4));
    }
}