import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('frm') public frm: NgForm;
  error_message: string;
  success_message: string;
  buttonDisabled = false;
  model: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {}

  login() {
    this.buttonDisabled = true;
    this.authService.login(this.model);
  }

  updateButton($event) {
    this.buttonDisabled = $event;
  }
}
