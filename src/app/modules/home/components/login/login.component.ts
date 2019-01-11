import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeadersService} from '../../../../core/services/headers.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SessionStore, User, SessionState } from 'src/app/state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  sessionStore: SessionStore;
  sessionState: SessionState;
  private headerService: HeadersService;

  constructor(private authenticationService: AuthenticationService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.loginForm.get('email').setValue('Test');
    this.loginForm.get('password').setValue('Password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userName: string = this.loginForm.get('email').value;
      const password: string  = this.loginForm.get('password').value;

      // this.authenticationService.AuthenticateUser(userName, password);
      // this.sessionState = new SessionState(userName, fingerPrint);
      // this.authenticationService.login(this.sessionState);
      console.log('Authenticate User Pre Subscribe: ' + userName);
      this.authenticationService.AuthenticateUser(userName, password).subscribe(data => {
      this.sessionStore = new SessionStore();
      // this.sessionState.user.userName = data['userName'];
      // this.sessionState.user.firstName = data['firstName'];
      // this.sessionState.user.lastName = data['lastName'];
      // this.sessionState.user.fingerPrint = data['fingerPrint'];

        this.sessionStore.login(data);
      //     this.router.navigateByUrl('');
    });
  }
}
}
