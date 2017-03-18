import { Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component ({
    moduleId: module.id,
    selector : 'dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['dashboard.component.css'],
    providers : []
})
export class DashBoard implements OnInit {
    heroes: Hero[];
   // title = 'Gosoft Component!';

    constructor(private service: HeroService) {}

    ngOnInit(): void {
        this.getHero();
    }

    getHero() : void {
      this.service.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
    }
}