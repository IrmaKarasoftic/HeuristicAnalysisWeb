import { environment } from '../../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from '../common/unsubscribe-on-destroy';

export abstract class BaseService extends UnsubscribeOnDestroy {

    protected _url: string;
    protected _headers: HttpHeaders;
    protected _http: HttpClient;

    constructor(http: HttpClient) {
        super();
        this._url = 'http://localhost:52451/api/';
        this._headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this._http = http;
    }

    protected buildUrl(url: string, id: string = null) {
        if (id) {
            return `${this._url}${url}/${String(id)}`;
        }
        return this._url + url;
    }

    protected buildQuery(url: string, query: Record<string, any>): string {
      url += '?';
      Object.keys(query).forEach(key => {
        if (query[key]) {
          if (query[key] instanceof Array && query[key].length) {
            const arrObj = query[key];
            Object.keys(arrObj).forEach(ar => {
              url += `${key}=${arrObj[ar]}&`;
            });
          } else {
            url += `${key}=${query[key]}&`;
          }
        }
      });
      url = url.substring(0, url.length - 1);
      return this._url + url;
  }

    protected buildQueryStringUrl(url: string, id: number = null) {
        if (id) {
            return `${this._url}${url}?id=${String(id)}`;
        }
        return this._url + url;
    }

    public getAll(entityUrl: string): Observable<any> {
        const url = 'http://localhost:52451/api/' + entityUrl;
        return this._http.get(url, { headers: this._headers }).pipe(catchError(this.handleError));
    }

    public get(url: string, id: string): Observable<any> {
        url = this.buildUrl(url, id);
        return this._http.get(url, { headers: this._headers }).pipe(catchError(this.handleError));
    }

    public search(url: string, object: any): Observable<any> {
      url = this.buildQuery(url, object);
      return this._http.get(url, { headers: this._headers }).pipe(catchError(this.handleError));
  }

    public insert(url: string, data: any): Observable<any> {
        url = this.buildUrl(url);
        return this._http.post(url, data, { headers: this._headers }).pipe(catchError(this.handleError));
    }

    public update(url: string, id: string, data: any): Observable<any> {
        url = this.buildUrl(url, id);
        return this._http.put(url, data, { headers: this._headers }).pipe(catchError(this.handleError));
    }

    public delete(url: string, id: number): Observable<any> {
        url = this.buildQueryStringUrl(url, id);
        return this._http.delete(url, { headers: this._headers }).pipe(catchError(this.handleError));
    }

    protected handleError(error: any) {
        console.log('Handling exception: ', error);
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return throwError(applicationError);
        }
        const modelStateErrors = error.error;
        return throwError(modelStateErrors || 'Server error');
    }
}
