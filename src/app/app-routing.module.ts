import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component'; 
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },

{ path: 'user/list', component: UserListComponent },
{ path: 'user/detail/:id', component: UserDetailComponent },
{ path: 'user/create', component: UserCreateComponent },
{ path: 'user/edit', component: UserEditComponent },

{ path: 'product/list', component: ProductListComponent},
{ path: 'product/detail/:id', component: ProductDetailComponent},
{ path: 'product/create', component: ProductCreateComponent },
{ path: 'product/edit', component: ProductEditComponent},


{ path: '**', component: E404Component }

];
// the below was generated
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
