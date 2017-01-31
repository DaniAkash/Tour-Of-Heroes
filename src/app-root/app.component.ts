import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from '../common/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        this.heroes = heroes;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
