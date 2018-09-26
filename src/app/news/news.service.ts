import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { api } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNewsList() {
    return this.httpClient
      .get(api.url + api.key)
      .pipe(
        map((body: any) => {
          if (body.status === 'ok') {
            return body.articles;
          } else {
            alert('Error');
          }
        }),
        catchError(() => of('Error, could not load news info :-('))
      );
  }

  getNews(url) {
    return this.httpClient
      .get('/api/' + url + '&api-key=' + api.key)
      .pipe(
        map((body: any) => {
          if (body.response.status === 'ok') {
            return body.response.results;
          } else {
            alert('Error');
          }
        }),
        catchError(() => of('Error, could not load news info :-('))
      );
  }
}
