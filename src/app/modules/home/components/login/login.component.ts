import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadersService} from '../../../../core/services/headers.service';
import { Credentials } from '../../../../models/credentials.models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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

      // this.verifyUser(this.credentials).subscribe(data => console.log(data['token']));
      // this.verifyUser(this.credentials).subscribe(data => token = data['token']);
      // console.log(token);
      // this.authService.login(this.credentials).subscribe(() => {
      // this.router.navigateByUrl('');
      // });
    }
  }
}
