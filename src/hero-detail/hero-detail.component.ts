import { Component, Input } from '@angular/core';
import { Hero } from '../common/hero';

@Component({
  selector: 'app-my-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
