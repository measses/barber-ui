import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserForLoginDto } from '../../../../dtos/user-for-login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    if (typeof document !== 'undefined') document.body.className = '';
    this.createLoginForm();
  }

  ngOnDestroy(): void {
    if (typeof document !== 'undefined') document.body.className = 'authentication-bg';
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) return;

    const loginDto: UserForLoginDto = Object.assign({}, this.loginForm.value);

    this.authService.login(loginDto).subscribe(result => {
      localStorage.setItem("token", result.data)
      this.router.navigateByUrl('/admin/home');
    });
  }
error(error: any) {
    console.log(error);
  }
}
