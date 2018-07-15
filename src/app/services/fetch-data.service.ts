import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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

  private hostsUrl = '/api/hosts';
  private processesUrl = '/api/processes';
  private servicesUrl = '/api/services';

  constructor(private http: HttpClient) {
    timer(0, 3000).pipe(
      switchMap(() => this.getHosts()),
      map(hosts => {
        const updHosts: Host[] = hosts.map(host => ({
          ...host,
          cpu: faker.random.number({ min: 0, max: 100 }),
          disk: faker.random.number({ min: 0, max: 100 }),
          ram: faker.random.number({ min: 0, max: 100 })
        }));
        return updHosts;
      })).subscribe(hosts => {
        for (const host of hosts) {
          this.http.put(`${this.hostsUrl}/${host.id}`, host, httpOptions)
            .pipe(catchError(this.handleError<any>('updateProcess')))
            .subscribe(() => { });
        }
      });
  }

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
