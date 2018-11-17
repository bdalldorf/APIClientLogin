import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeadersService} from '../../../../core/services/headers.service';
import { Credentials } from '../../../../models/credentials.models';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  credentials: Credentials;
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

      this.loginService.getToken(userName, password).subscribe(data => {
        token = data;

        if (token !== '') {
          this.credentials = new Credentials(userName, password, token, '');
          this.loginService.login(this.credentials);
          this.router.navigateByUrl('');
        }
      });
    }
  }
}
