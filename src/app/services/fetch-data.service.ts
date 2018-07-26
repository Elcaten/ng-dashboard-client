import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

import { Host } from '../models/host.model';
import { Process } from '../models/process.model';
import { Service } from '../models/service.model';

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

  private processesApiUrl = 'http://127.0.0.1:3301/api/processes';
  private socket$: WebSocketSubject<any>;

  constructor(private http: HttpClient) {
    this.socket$ = new WebSocketSubject('ws://localhost:3302');
    this.hosts$ = this.socket$.pipe(map(message => message.hosts));
    this.services$ = this.socket$.pipe(map(message => message.services));
    this.processes$ = this.socket$.pipe(map(message => message.processes));
  }

  refresh() {
    this.socket$.next({ type: 'getAll' });
  }

  updateProcess(process: Process): Observable<any> {
    return this.http.put(`${this.processesApiUrl}/${process.id}`, process, httpOptions)
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
