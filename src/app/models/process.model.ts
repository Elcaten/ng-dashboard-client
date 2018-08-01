import { Entity, EntityMetadata } from './entity.model';

// TODO: вынести в общий с сервером модуль
export interface Process extends Entity {
  status: boolean;
  hasError: boolean;
  lastStartDate: Date | null;
  lastErrorDate: Date | null;
  lastErrorText: string;
}

export const processMetadata: EntityMetadata<Process> = {
  _id: {
    hidden: true
  },
  name: {
    displayName: 'Название'
  },
  status: {
    displayName: 'Состояние',
    editable: true,
  },
  hasError: {
    displayName: 'Ошибки'
  },
  lastStartDate: {
    displayName: 'Дата последнего запуска',
    dataType: 'datetime',
    format: 'shortDate'
  },
  lastErrorDate: {
    displayName: 'Дата последней ошибки',
    dataType: 'datetime',
    format: 'shortDate'
  }
  ,
  lastErrorText: {
    displayName: 'Текст последней ошибки'
  }
};
