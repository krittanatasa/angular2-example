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
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  run cmd -> npm install

@NgModule({
  declarations: [
    GosoftComponent, 
    GosoftDetail, 
    DashBoard,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
