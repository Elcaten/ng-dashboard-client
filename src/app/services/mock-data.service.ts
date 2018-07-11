import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';
import { interval } from 'rxjs';

import { Entity } from '../models/entity.model';
import { Host } from '../models/host.model';
import { Process } from '../models/process.model';
import { Service } from '../models/service.model';

/** DEPRECATED */
export class MockDataService implements InMemoryDbService {
  createDb() {
    interval(1000)
      .subscribe(x => console.log(x));

    const hosts = this.generateEntityArray(this.generateHost);
    const processes = this.generateEntityArray(this.generateProcess);
    const services = this.generateEntityArray(this.generateService);
    return { hosts, processes, services };
  }

  private generateEntityArray(entityGenerator: (id: number) => Entity) {
    const entities: Entity[] = [];
    for (let i = 0; i < faker.random.number({ min: 10, max: 20 }); i++) {
      entities.push(entityGenerator(i));
    }
    return entities;
  }

  private generateHost(id: number): Host {
    return {
      id,
      name: faker.internet.ip(),
      status: faker.random.boolean() ? 'online' : 'offline',
      cpu: faker.random.number({ min: 0, max: 1, precision: 0.01 }),
      disk: faker.random.number({ min: 0, max: 1, precision: 0.01 }),
      ram: faker.random.number({ min: 0, max: 1, precision: 0.01 })
    };
  }

  private generateProcess(id: number): Process {
    return {
      id,
      name: faker.system.commonFileName('exe', ''),
      status: faker.random.boolean(),
      hasError: faker.random.boolean(),
      lastStartDate: faker.date.recent(10),
      lastErrorDate: faker.random.boolean() ? faker.date.recent(10) : null,
      lastErrorText: faker.random.boolean() ? faker.hacker.phrase() : ''
    };
  }

  private generateService(id: number): Service {
    return {
      id,
      name: `${faker.hacker.verb()}_${faker.hacker.noun()}`,
      status: faker.random.arrayElement(['starting', 'running', 'stopping', 'stopped']) as any,
      releaseVersion: faker.system.semver(),
      tags: faker.random.words().split(' ')
    };
  }
}
