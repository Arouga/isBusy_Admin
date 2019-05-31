import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'editUserProfile/:id',
    component: EditUserProfileComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
