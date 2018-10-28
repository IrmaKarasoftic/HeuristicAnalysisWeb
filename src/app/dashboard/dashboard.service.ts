import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getApps() {
    return this.http.get('http://localhost:52451/api/Applications');
  }
}
