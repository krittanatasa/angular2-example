import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app.component';
import { GosoftComponent } from './gosoft.component';
import { GosoftDetail } from './gosoft.detail';

@NgModule({
  declarations: [
    GosoftComponent, GosoftDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [GosoftComponent]
})
export class AppModule { }
