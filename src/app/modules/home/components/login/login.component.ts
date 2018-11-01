import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    console.log('ngFORM');
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    console.log('SUBMIT');
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['\\']);
          }); // ,
         // error => {
         //     this.error = error;
         //     this.loading = false;
         // });
    }
  }
}

