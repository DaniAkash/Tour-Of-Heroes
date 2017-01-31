import { Injectable } from '@angular/core';

import { Hero } from '../common/hero';
import { HEROES } from '../data/heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
