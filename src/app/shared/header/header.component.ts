import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  navbarOpen = false;
  messages: any;
  isAdmin = false;
  isLoggedIn = false;
  constructor(private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.isLoggedIn = this.isAuthenticated();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  signIn() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
