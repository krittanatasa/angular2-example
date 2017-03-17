import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { GosoftComponent } from './gosoft.component';
import { GosoftDetail } from './gosoft.detail';
import { DashBoard } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module'
import { HeroService } from './hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroSearchComponent } from './hero-search.component';
import { AddHeroComponent } from './add.hero.component';
import { DataTableModule } from "angular2-datatable";

//  import { HeroDataTableComponent } from './hero.datatable.component';
import { HeroDataTableModule } from './hero.datatable.module';
// import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
  declarations: [
    GosoftComponent, 
    GosoftDetail, 
    DashBoard,
    AppComponent,
    HeroSearchComponent,
    AddHeroComponent
    //  HeroDataTableComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    DataTableModule,
    HeroDataTableModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
