import { Entity, EntityMetadata } from './entity.model';

export interface Service extends Entity {
  tags: string[];
  status: 'starting' | 'running' | 'stopping' | 'stopped';
  releaseVersion: string;
}

export const serviceMetadata: EntityMetadata<Service> = {
  id: {
    hidden: true
  },
  name: {
    displayName: 'Название',
    width: 'auto'
  },
  status: {
    displayName: 'Статус'
  },
  tags: {
    displayName: 'Тэги'
  },
  releaseVersion: {
    displayName: 'Версия релиза'
  }
};
