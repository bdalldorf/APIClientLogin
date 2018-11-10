import { NgModule } from '@angular/core';
import { AppComponent } from '../modules/home/components/app/app.component';
import { HomeModule } from '../modules/home/home.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
  ],
  imports: [
    HomeModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class CoreModule { }
