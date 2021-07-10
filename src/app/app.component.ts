import { ChangeDetectorRef, Component, Host, OnDestroy } from '@angular/core';

import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { hostMetadata } from './models/host.model';
import { Process, processMetadata } from './models/process.model';
import { Service, serviceMetadata } from './models/service.model';
import { FetchDataService } from './services/fetch-data.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public refreshClick$ = new Subject();
  public autoUpdateChange$ = new BehaviorSubject<boolean>(true);

  public hosts: Host[];
  public processes: Process[];
  public services: Service[];

  public hostMetadata = hostMetadata;
  public processMetadata = processMetadata;
  public serviceMetadata = serviceMetadata;

  private subsriptions: Subscription[] = [];

  constructor(private fetch: FetchDataService, private ref: ChangeDetectorRef) {
    this.refreshClick$.subscribe(() => {
      this.fetch.refresh();
      this.fetch.hosts$.pipe(first()).subscribe(hosts => this.hosts = hosts);
      this.fetch.processes$.pipe(first()).subscribe(processes => this.processes = processes);
      this.fetch.services$.pipe(first()).subscribe(services => this.services = services);
    });

    this.autoUpdateChange$.subscribe(autoUpdate => {
      if (autoUpdate) {
        this.subscribe();
        this.fetch.refresh();
      } else {
        this.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  updateProcess(process: Process) {
    this.fetch.updateProcess(process).subscribe(() => { });
  }

  private subscribe() {
    this.subsriptions.push(
      this.fetch.hosts$.subscribe(hosts => this.hosts = hosts),
      this.fetch.processes$.subscribe(processes => this.processes = processes),
      this.fetch.services$.subscribe(services => this.services = services)
    );
  }

  private unsubscribe() {
    for (const subscription of this.subsriptions) {
      subscription.unsubscribe();
    }
  }
}
