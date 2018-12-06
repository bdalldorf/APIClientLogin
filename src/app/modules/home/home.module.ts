// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrFormsNextModule  } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';

// Component Imports
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from '../home/components/dashboard/dashboard.component';
import { LessonsComponent } from '../home/components/lessons/lessons.component';
import { LoginComponent } from '../home/components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

// Service Imports
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { HeadersService } from 'src/app/core/services/headers.service';

import { HomeRoutingModule } from './home-routing.module';
import { HttpXsrfInterceptor } from 'src/app/core/interceptors/HttpXsrf.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LessonsComponent,
    LoginComponent,
    AboutComponent,
    PreferencesComponent
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
    HttpClientXsrfModule
  ],
  providers: [
    AuthenticationService,
    HeadersService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true }
  ],

})

export class HomeModule { }
