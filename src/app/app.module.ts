import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { DxDataGridModule, DxSwitchModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { GridCellDataPipe } from './pipes/grid-cell-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridCellDataPipe,
    DashboardPanelComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxSwitchModule,
    RoundProgressModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
