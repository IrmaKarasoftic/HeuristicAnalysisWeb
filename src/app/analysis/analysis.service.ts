import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnalysisService {

  constructor(private http: Http) { }

  getAnalysisData() {
    return this.http.get('/api/analysis');
  }
}
