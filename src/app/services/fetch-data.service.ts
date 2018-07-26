import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  private hostsUrl = 'http://127.0.0.1:3301/hosts';
  private processesUrl = 'http://127.0.0.1:3301/processes';
  private servicesUrl = 'http://127.0.0.1:3301/services';

  constructor(private http: HttpClient) {}

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(this.hostsUrl);
  }

  getProcesses(): Observable<Process[]> {
    return this.http.get<Process[]>(this.processesUrl);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.servicesUrl);
  }

  updateProcess(process: Process): Observable<any> {
    return this.http.put(`${this.processesUrl}/${process.id}`, process, httpOptions)
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
