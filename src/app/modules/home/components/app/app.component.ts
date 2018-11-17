import { Component, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';
import { environment } from '../../../../../environments/environment';
import { SessionQuery, SessionService } from 'src/app/session';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isLoggedIn: boolean;

  constructor(private ngZone: NgZone, sessionQuery: SessionQuery, private sessionService: SessionService, private router: Router) {
    this.title = 'Clarity Project';
    sessionQuery.isLoggedIn$.subscribe(loggedin => this.isLoggedIn = loggedin);

    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }

  public logout(): void {
    this.sessionService.logout();
    location.reload();
  }
}
