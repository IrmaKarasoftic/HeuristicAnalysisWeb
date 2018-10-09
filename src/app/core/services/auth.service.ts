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
    this.getLoggedInName = new Subject();
    this.isRegistration = new BehaviorSubject(false);
    console.log('Init auth service', this);
    this.loadIfLoggedIn();
  }

  isAuthenticated() {
    return (localStorage.getItem('auth_token') !== null);
  }

  loadIfLoggedIn() {
    if (this.isAuthenticated()) {
      this.getLoggedInName.next(this.getUserName());
    }
  }

  getUserName() {
    try {
      const tokenDecoded = jwt_decode.decodeToken(this.getAuthToken().accessToken);
      return tokenDecoded.firstName;
    } catch (Error) {
      return null;
    }
  }

  getUserEmail() {
    try {
      const tokenDecoded = jwt_decode.decodeToken(this.getAuthToken().accessToken);
      return tokenDecoded.userEmail;
    } catch (Error) {
      return null;
    }
  }

  getUserId() {
    try {
      const tokenDecoded = jwt_decode.decodeToken(this.getAuthToken().accessToken);
      return +tokenDecoded.userId;
    } catch (Error) {
      return null;
    }
  }

  getAuthToken() {
    try {
      return JSON.parse(localStorage.getItem('auth_token'));
    } catch (Error) {
      return null;
    }
  }

  isInRole(role: string): boolean {
    if (!this.isAuthenticated()) { return false; }
    const tokenDecoded = jwt_decode.decodeToken(this.getAuthToken().accessToken);
    return (tokenDecoded.role.indexOf(role) > -1);
  }

  getRoles(): any {
    if (!this.isAuthenticated()) { return false; }
    const tokenDecoded = jwt_decode.decodeToken(this.getAuthToken().accessToken);
    return (tokenDecoded.role);
  }

  redirectToDasboard() {
    this.router.navigateByUrl('');
  }

  updateUsersData() {
    this.loadIfLoggedIn();
    /* this.getRefreshToken().subscribe(
      (res: any) => {
        this.loadIfLoggedIn();
      }
    ); */
  }

  getRefreshToken() {
    // const url = this.buildUrl('user/SSO/token/refresh');
    // const auth_token = this.getAuthToken();

    // if (auth_token === null && this.router.url !== '') {
    //   this.router.navigateByUrl('');
    // }

    // const refreshModel = new RefreshToken(auth_token.refreshToken);

    // return this._http.post(url, refreshModel).pipe(tap(
    //   (res: OkResponse<any>) => {
    //     localStorage.setItem('auth_token', JSON.stringify(res.result));
    //   }))
    //   .pipe(catchError(err => {
    //     return of(false);
    //   }));
  }

  login(model: LoginModel) {
    // return this.insert('user/SSO/login', model).pipe(map(
    //   (res: OkResponse<any>) => {
    //     if (res.result.token !== null) {
    //       localStorage.setItem('auth_token', JSON.stringify(res.result.token));
    //     }
    //     return res;
    //   }
    // ));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.getLoggedInName.next(null);
    // this.statusBarService.hide();
    this.dialogService.hide();
  }
}
