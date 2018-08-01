import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() updateChange = new EventEmitter();

  @Input() autoUpdate: boolean;
  @Output() autoUpdateChange = new EventEmitter<boolean>();

  emitAutoUpdate() {
    this.autoUpdate = !this.autoUpdate;
    this.autoUpdateChange.emit(this.autoUpdate);
  }
}
