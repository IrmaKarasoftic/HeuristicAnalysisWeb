import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  messages: any;

  constructor(private router: Router,
              private authService: AuthService,
             ) { }

  ngOnInit() {
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

  signOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
