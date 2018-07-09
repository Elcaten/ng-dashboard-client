import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).toPromise();
  }
}
