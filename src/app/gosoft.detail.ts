import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'gosoft-detail',
  templateUrl: './gosoft.detail.html'
})

export class GosoftDetail {
    @Input() 
    selectedHero :Hero;
}