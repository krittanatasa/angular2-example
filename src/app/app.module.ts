import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { GosoftComponent } from './gosoft.component';
import { GosoftDetail } from './gosoft.detail';
import { DashBoard } from './dashboard.component';
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
    RouterModule.forRoot([
      {path: '', component : DashBoard} ,
      {path: 'heroes', component: GosoftComponent} ,
      {path: 'detail/:id', component: GosoftDetail}
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
