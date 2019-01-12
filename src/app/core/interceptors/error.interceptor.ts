import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionStore } from 'src/app/state';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private sessionStore: SessionStore) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401 || err.status === 400) {
                // auto logout if 401 response returned from api
                // auto logout if 400 response returned from api
                this.sessionStore.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
