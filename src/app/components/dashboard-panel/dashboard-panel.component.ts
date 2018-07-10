import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';

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

  ngOnChanges(changes: SimpleChanges) {
     if (changes.entityMetadata) {
       this.columnNames = Object.keys(this.entityMetadata);
     }
  }
}
