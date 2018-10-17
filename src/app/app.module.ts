import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutegetService } from './api/api_routes/apigetroute/routeget.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    RoutegetService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
