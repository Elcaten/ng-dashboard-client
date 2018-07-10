import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Host } from '../models/host.model';
import { Process } from '../models/process.model';
import { Service } from '../models/service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private hostsUrl = 'api/hosts';
  private processesUrl = 'api/processes';
  private servicesUrl = 'api/services';

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
}
