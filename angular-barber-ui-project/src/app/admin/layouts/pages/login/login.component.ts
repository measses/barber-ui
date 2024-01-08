import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit():void {
    if(typeof document !== 'undefined') document.body.className=""
  }

  ngOnDestroy():void {
    if(typeof document !== 'undefined') document.body.className="authentication-bg"
    }
  }


