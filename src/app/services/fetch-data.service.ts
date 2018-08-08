import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, share } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

import { Host } from '../models/host.model';
import { Process } from '../models/process.model';
import { Service } from '../models/service.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  public hosts$: Observable<Host[]>;
  public services$: Observable<Service[]>;
  public processes$: Observable<Process[]>;

  private processesApiUrl = `${environment.apiBaseUrl}/processes`;
  private socket$: WebSocketSubject<any>;

  constructor(private http: HttpClient) {
    this.socket$ = new WebSocketSubject(environment.webSocketUrl);
    this.hosts$ = this.socket$.pipe(map(message => message.hosts), share());
    this.services$ = this.socket$.pipe(map(message => message.services), share());
    this.processes$ = this.socket$.pipe(map(message => message.processes), share());
  }

  refresh() {
    this.socket$.next({ type: 'REFRESH' }); // TODO: вынести в общий с сервером модуль
  }

  updateProcess(process: Process): Observable<any> {
    return this.http.put(`${this.processesApiUrl}/${process._id}`, process, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProcess'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
