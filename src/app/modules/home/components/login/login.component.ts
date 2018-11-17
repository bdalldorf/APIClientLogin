import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeadersService} from '../../../../core/services/headers.service';
import { LoginService } from 'src/app/core/services/login.service';
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

  constructor(private loginService: LoginService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userName: string = this.loginForm.get('email').value;
      const password: string  = this.loginForm.get('password').value;
      let token: string;
      let fingerPrint: string;

      this.loginService.getToken(userName, password).subscribe(data => {
        token = data['token'];
        fingerPrint = data['fingerPrint'];

        if (token !== '') {
          this.sessionState = new SessionState(userName, token, fingerPrint);
          this.loginService.login(this.sessionState);
          this.router.navigateByUrl('');
        }
      });
    }
  }
}
