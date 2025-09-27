import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class News {

  constructor( private http: HttpClient ) { }

  private executeQuery<T>( endpoint: string ) {
    return this.http.get<T>(`${ apiUrl }${ endpoint }`, {
      params: {
        apiKey: apiKey,
        country: 'us'
      },
    })
  }

  getTopHeadlines(): Observable<Article[]> {
    return this.executeQuery<NewsResponse>(`/top-headlines?&category=business`)
    .pipe (
      map( ({ articles }) => articles )
    );
  }

  getTopHeadlinesByCategory( category: string ):Observable<Article[]>{
    return this.executeQuery<NewsResponse>(`/top-headlines?&category=${ category }`)
    .pipe (
      map( ({ articles }) => articles )
    );
  }

}
