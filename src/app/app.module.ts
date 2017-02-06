import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from '../data/in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroSearchComponent } from "../hero-search/hero-search.component";
import { HeroService } from '../services/hero.service';
import { HeroSearchService } from "../services/hero-search.service";
import { AppRoutingModule } from '../routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [
    HeroService,
    HeroSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
