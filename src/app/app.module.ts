import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule, DxSwitchModule } from 'devextreme-angular';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { FormsModule } from '../../node_modules/@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPanelComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxSwitchModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
