import { Component, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private ngZone: NgZone) {
    this.title = 'Clarity Project';

    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }
}
