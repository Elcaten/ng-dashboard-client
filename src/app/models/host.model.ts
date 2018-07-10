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
    format: 'percent'
  },
  disk: {
    displayName: 'Disk',
    format: 'percent'
  },
  ram: {
    displayName: 'RAM',,
    format: 'percent'
  }
};


