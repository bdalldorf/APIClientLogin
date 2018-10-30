import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';
import { LessonsComponent } from '../home/components/lessons/lessons.component';
import { NavComponent } from '../home/components/nav/nav.component';
import { LoginComponent } from '../home/components/login/login.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrFormsNextModule  } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LessonsComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ClrFormsNextModule ,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class HomeModule { }
