import { ChangeDetectorRef, Component, Host, OnDestroy } from '@angular/core';

import { Subject, Subscription, BehaviorSubject } from '../../node_modules/rxjs';
import { hostMetadata } from './models/host.model';
import { Process, processMetadata } from './models/process.model';
import { Service, serviceMetadata } from './models/service.model';
import { FetchDataService } from './services/fetch-data.service';

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
    // TODO: бага - если отключено автообновление, ручное обновление не работает (т.к. отписан от подписок)
    this.refreshClick$.subscribe(() => this.fetch.refresh());

    this.autoUpdateChange$.subscribe(autoUpdate => {
      if (autoUpdate) {
        this.subscribe();
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
