import { ChangeDetectorRef, Component, Host } from '@angular/core';

import { Subject } from '../../node_modules/rxjs';
import { hostMetadata } from './models/host.model';
import { Process, processMetadata } from './models/process.model';
import { Service, serviceMetadata } from './models/service.model';
import { FetchDataService } from './services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public refreshClick$ = new Subject();
  public hosts: Host[];
  public processes: Process[];
  public services: Service[];

  public hostMetadata = hostMetadata;
  public processMetadata = processMetadata;
  public serviceMetadata = serviceMetadata;

  constructor(private fetch: FetchDataService, private ref: ChangeDetectorRef) {
    this.refresh();
    this.refreshClick$.subscribe(() => this.refresh());
  }

  refresh() {
    this.fetch.getHosts().subscribe(hosts => this.hosts = hosts);
    this.fetch.getProcesses().subscribe(processes => this.processes = processes);
    this.fetch.getServices().subscribe(services => this.services = services);
  }

  updateProcess(process: Process) {
    this.fetch.updateProcess(process).subscribe(() => { });
  }
}
