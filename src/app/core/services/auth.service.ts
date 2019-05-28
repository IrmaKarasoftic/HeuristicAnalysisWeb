import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DialogService } from './../../shared/dialog/dialog.service';
import { OkResponse } from './../interfaces/ok-response.interface';
import { LoginModel } from './../models/login.model';
import { BaseService } from './base.service';
const jwt_decode = new JwtHelperService();

@Injectable()
export class AuthService extends BaseService {

  public getLoggedInName: Subject<string>;
  public isRegistration: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dialogService: DialogService,
  ) {
    super(http);
  }

  isAuthenticated() {
    return (localStorage.getItem('user_id') !== null);
  }

  isAdmin() {
    return (localStorage.getItem('admin') === 'true');
  }

  getUserName() {
    return (localStorage.getItem('name'));
  }

  getUserEmail() {
    return (localStorage.getItem('email'));
  }

  getUserId() {
    return (localStorage.getItem('user_id'));
  }

  redirectToDasboard(isAdmin) {
    (isAdmin) ? this.router.navigate(['/admin/applications']) : this.router.navigate(['/dashboard/analysis']);
  }

  login(model: LoginModel) {
    return this.insert('login', model)
      .subscribe(
        (res: any) => {
          if (res !== null) {
            console.log(res);
            localStorage.setItem('user_id', JSON.stringify(res.Id));
            localStorage.setItem('email', JSON.stringify(res.Email));
            // tslint:disable-next-line:prefer-template
            localStorage.setItem('name', JSON.stringify(res.LastName + ' ' + res.FirstName));
            localStorage.setItem('admin', JSON.stringify(res.Admin));
            this.redirectToDasboard(res.Admin);
          }
          return res;
        }
      );
  }

  logout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('admin');
  }
}
