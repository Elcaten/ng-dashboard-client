import { Entity, EntityMetadata } from './entity.model';

export interface Host extends Entity {
  status: 'online' | 'offline';
  ram: number;
  cpu: number;
  disk: number;
}

export const hostMetadata: EntityMetadata<Host> = {
  id: {
    hidden: true
  },
  name: {
    displayName: 'Имя'
  },
  status: {
    displayName: 'Состояние'
  },
  cpu: {
    displayName: 'CPU',
    template: 'gauge'
  },
  disk: {
    displayName: 'Disk',
    template: 'gauge'
  },
  ram: {
    displayName: 'RAM',
    template: 'gauge'
  }
};


