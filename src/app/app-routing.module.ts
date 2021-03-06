import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GosoftComponent } from './gosoft.component';
import { GosoftDetail } from './gosoft.detail';
import { DashBoard } from './dashboard.component';
import { AddHeroComponent } from './add.hero.component';
import { HeroDataTableComponent } from './hero.datatable.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashBoard },
  { path: 'detail/:id', component: GosoftDetail },
  { path: 'heroes',     component: GosoftComponent },
  { path: 'add',     component: AddHeroComponent },
  { path: 'datatable',     component: HeroDataTableComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
