import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Directive, TemplateRef, ContentChildren, QueryList } from '@angular/core';

@Directive({
  selector: '[toolbarItem]'
})
export class ToolbarItem {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @ContentChildren(ToolbarItem) items: QueryList<ToolbarItem>;

  addButtonOptions = {
      icon: 'plus',
      onClick: () => {
          console.log('Add button has been clicked!');
      }
  };
}
