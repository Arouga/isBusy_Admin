import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { BeforeLoginGuard } from './guards/before-login.guard';
import { AfterLoginGuard } from './guards/after-login.guard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    canActivate: [BeforeLoginGuard]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ], 
    canActivate: [AfterLoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginGuard]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [BeforeLoginGuard]
  },
  {
    path: '**',
    redirectTo: 'index',
    canActivate: [BeforeLoginGuard]
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
