import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Injectable()
export class HeroService {
    getHero(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHero()), 2000);
        });
    }

    getHeroById(id: number): Promise<Hero> {
        return this.getHero()
                    .then(heroes => heroes.find(hero => hero.id === id));
        }
}