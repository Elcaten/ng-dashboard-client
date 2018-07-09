import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dataSource: any = {};

  constructor(private heroService: HeroService) {
    this.dataSource.store = new CustomStore({
      load: function (loadOptions: any) {
        return heroService.getHeroes()
          .then((data: any) => {
            return {
              data: data,
              totalCount: data ? data.length : 0
            };
          })
          .catch(error => { throw new Error('Data Loading Error'); });
      }
    });
  }
}
