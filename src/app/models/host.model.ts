import { Entity, EntityMetadata } from './entity.model';

// TODO: вынести в общий с сервером модуль
export interface Host extends Entity {
  status: 'online' | 'offline';
  ram: number;
  cpu: number;
  disk: number;
}

export const hostMetadata: EntityMetadata<Host> = {
  _id: {
    hidden: true
  },
  name: {
    displayName: 'Имя',
    width: 'auto'
  },
  status: {
    displayName: 'Состояние'
  },
  cpu: {
    displayName: 'CPU',
    alignment: 'center',
    format: `##'%'`
  },
  disk: {
    displayName: 'Disk',
    alignment: 'center',
    format: `##'%'`
  },
  ram: {
    displayName: 'RAM',
    alignment: 'center',
    format: `##'%'`
  }
};


