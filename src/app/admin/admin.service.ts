import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  getApps() {
    return this.http.get('http://localhost:52451/api/Aplikacije');
  }
}
