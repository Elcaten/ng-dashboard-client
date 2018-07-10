import { Component, Host } from '@angular/core';
import { Observable } from 'rxjs';

import { hostMetadata } from './models/host.model';
import { Process, processMetadata } from './models/process.model';
import { Service, serviceMetadata } from './models/service.model';
import { FetchDataService } from './services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hosts$: Observable<Host[]> = this.fetch.getHosts();
  public processes$: Observable<Process[]> = this.fetch.getProcesses();
  public services$: Observable<Service[]> = this.fetch.getServices();

  public hostMetadata = hostMetadata;
  public processMetadata = processMetadata;
  public serviceMetadata = serviceMetadata;

  constructor(private fetch: FetchDataService) { }
}
