import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../../../share/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  defaultAuth: any = {
    email: 'depasie2019@gmail.com',
    password: 'secret',
  };
  loginForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;
  appId: string = '';
  isPasswordVisible = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.isLoading$ = this.authService.isLoading$;

  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']).then();
    }
    this.initForm();

  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submit() {
    const loginData = this.loginForm.value;

    this.authService.login(loginData.email, loginData.password, this.appId)
      .subscribe((_) => {
        this.router.navigate(['/dashboard']).then();
      })
  }

}
