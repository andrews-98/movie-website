import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //@ts-ignore
  username: string
  //@ts-ignore
  password: string
  img: string = '..//src/assets/pngwing.com.png'
   //@ts-ignore
  errMsg: string

  constructor(
    private auth: AuthService,
    private route: Router
    ) {}

  ngOnInit(): void {
  }

  login() {
    if(this.username?.trim().length === 0) {
       this.errMsg = 'Username is required'
    } else if(this.password?.trim().length === 0) {
      this.errMsg = 'Password is required'
    } else if (this.password.length < 6) {
      this.errMsg = 'Minimum 6 symbols in password length'
    } else {
      this.errMsg = ''
      const res = this.auth.login(this.username, this.password)
      if(res === 200) {
        this.route.navigate(['home'])
      } 
      if(res === 403) {
        this.errMsg = 'The account is not found'
      }
    }
  }
}
