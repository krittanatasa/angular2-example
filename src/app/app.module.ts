import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app.component';
import { GosoftComponent } from './gosoft.component';

@NgModule({
  declarations: [
    GosoftComponent
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
