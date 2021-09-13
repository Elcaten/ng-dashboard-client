import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { DxoSearchPanelComponent } from 'devextreme-angular/ui/nested';

import { Entity, EntityMetadata } from '../../models/entity.model';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss']
})
export class DashboardPanelComponent implements OnChanges {
  columnNames: string[];

  @Input() dataSource: DxDataGridComponent['dataSource']
  @Input() entityMetadata: EntityMetadata<any>;
  @Input() title: string;
  @Input() enableGroups = false;
  @Output() enityUpdate = new EventEmitter<Entity>();

  @ViewChild(DxoSearchPanelComponent, { read: ElementRef }) panel: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.entityMetadata) {
      this.columnNames = Object.keys(this.entityMetadata);
    }
  }

  emitEntityUpdate(event: RowUpdateEvent) {
    this.enityUpdate.emit(event.key);
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("primaryColorSample:", this.panel);
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
