export interface Entity {
  id: number;
  name: string;
}

export type EntityMetadata<T extends Entity> = {
  [attribute in keyof T]: {
    displayName?: string;
    hidden?: boolean;
    editable?: boolean;
    alignment?: 'center' | 'left' | 'right';
    format?: string;
    dataType?: 'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime';
    width?: number | string;
  }
};
