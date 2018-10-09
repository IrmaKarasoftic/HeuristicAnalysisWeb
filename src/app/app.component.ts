import { Component, OnInit } from '@angular/core';
import { OkResponse } from './core/interfaces/ok-response.interface';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  constructor() { }
}
