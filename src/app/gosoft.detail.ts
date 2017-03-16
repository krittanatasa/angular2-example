import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'gosoft-detail',
  templateUrl: './gosoft.detail.html',
  providers: [],
  styleUrls: ['./gosoft.detail.css']
})

export class GosoftDetail implements OnInit {
    
    selectedHero :Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
      ) {}

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.selectedHero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.heroService.update(this.selectedHero)
        .then(() => this.goBack());
    }
}