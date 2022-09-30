import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { logo } from '../constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  logo: string;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.logo = logo;
  }

}
