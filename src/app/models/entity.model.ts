import { Host } from './host.model';

export interface Entity {
  id: number;
  name: string;
}

export type EntityMetadata<T extends Entity> = {
  [attribute in keyof T]: {
    displayName?: string;
    hidden?: boolean;
    editable?: boolean;
    format?: string;
  };
};
