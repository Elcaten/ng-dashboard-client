import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Entity, EntityMetadata } from '../../models/entity.model';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPanelComponent implements OnChanges {
  public columnNames: string[];

  @Input() entities: Entity[];
  @Input() entityMetadata: EntityMetadata<any>;
  @Input() title: string;
  @Output() enityUpdate = new EventEmitter<Entity>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.entityMetadata) {
      this.columnNames = Object.keys(this.entityMetadata);
    }
  }

  emitEntityUpdate(event: RowUpdateEvent) {
    this.enityUpdate.emit(event.key);
  }
}

interface RowUpdateEvent {
  /** The widget's instance. */
  component: any;

  /** The widget's container. It is an HTML Element or a jQuery Element when you use jQuery. */
  element: Element;

  /** The updated data of the row; contains only those fields that have been updated. */
  data: any;

  /**The key of the row.If a field providing keys is not specified in the data source, the whole data object is considered the key. */
  key: any;

  /** The standard Error object defining an error that may occur during updating. */
  error?: Error;
}
