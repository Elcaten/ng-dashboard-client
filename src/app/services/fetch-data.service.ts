import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Host } from '../models/host.model';
import { Process } from '../models/process.model';
import { catchError } from 'rxjs/operators';
import { Service } from '../models/service.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private hostsUrl = '/api/hosts';
  private processesUrl = '/api/processes';
  private servicesUrl = '/api/services';

  constructor(private http: HttpClient) { }

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
    return this.http.put(this.processesUrl, process, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateProcess'))
      );
  }

  /**
   * Logs failed http requests and return optional result value
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
