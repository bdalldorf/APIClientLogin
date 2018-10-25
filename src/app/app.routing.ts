import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'lessons', component: LessonsComponent },
        { path: 'login', component: LoginComponent },
      ]
    }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
      ), FormsModule
      , BrowserModule
      , HttpClientModule
    ],
    exports: [
      RouterModule,
    ],
  })
  export class AppRoutingModule { }
