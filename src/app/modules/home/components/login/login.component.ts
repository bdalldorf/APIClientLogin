import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeadersService} from '../../../../core/services/headers.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SessionState } from 'src/app/models/session-state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
      // let fingerPrint: string;
      this.authenticationService.AuthenticateUser(userName, password);
      // this.authenticationService.AuthenticateUser(userName, password).subscribe(data => {
      //   fingerPrint = data['fingerPrint'];

      //   if (fingerPrint !== '') {
      //     this.sessionState = new SessionState(userName, fingerPrint);
      //     this.authenticationService.login(this.sessionState);
      //     this.router.navigateByUrl('');
      //   }
      // });
    }
  }
}
