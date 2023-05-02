import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  public get(url: string, params?: any): Observable<Object> {
    return this._http.get(url, { params });
  }

  public post(url: string, body: any): Subscription {
    return this._http.post(url, body).subscribe();
  }

  public put(url: string, body: any): Subscription {
    return this._http.put(url, body).subscribe();
  }

  public delete(url: string): Subscription {
    return this._http.delete(url).subscribe();
  }
}
