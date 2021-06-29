import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component'; 
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';

import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '**', component: E404Component },
{ path: 'about', component: AboutComponent },

{ path: 'user/list', component: UserListComponent}

];

// the below was generated
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
