import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
//   selector: 'gosoft-root',
  templateUrl: './hero.datatable.component.html',
 styleUrls : ['hero.datatable.component.css'],
  providers : [HeroService]
})
export class HeroDataTableComponent implements OnInit {
    
    public sortBy = "id";
    public filterQuery = "";

    heroes: Hero[];
    title = 'DataTable';
    selectedHero: Hero;
    
    constructor(private service: HeroService, 
          private router: Router) {}

    ngOnInit(): void {
        this.getHero();
    }

    doSomething(hero): void {
      console.log("click " + hero.name);
      this.selectedHero = hero;
    }

    getHero() : void {
      this.service.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}