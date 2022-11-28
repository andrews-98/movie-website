import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

  goHome() { 
   this.route.navigate(['home'])
  }


  logout() {
    this.auth.logout()
  }
  

}
