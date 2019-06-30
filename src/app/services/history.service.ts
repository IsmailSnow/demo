import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PageHistory } from '../models/pageHistory';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private url = 'http://localhost:8081/ws/history';

  private urlPage = 'http://localhost:8081/ws/history?page=';

  getHistory(): Observable<History[]>{
     return this.http.get<History[]>(this.url)
      .pipe(
           catchError(this.handleError('getHistory', []))
      );
  }
  getAllHistory(): Observable<History[]>{
    return this.http.get<History[]>(this.url+"/all")
     .pipe(
          catchError(this.handleError('getHistory', []))
     );
 }

 getPageHistory(page:number): Observable<PageHistory>{
  var url = this.urlPage;
  url=url+page + "&size=100";
  return this.http.get<PageHistory>(url)
  .pipe(
    map(response => {
      const data = response;
      console.log(data.content);
      return data ;
    }));
}
  constructor(private http : HttpClient) { }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
