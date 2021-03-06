import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule, DxSwitchModule, DxToolbarModule } from 'devextreme-angular';
import { ToolbarComponent, ToolbarItem } from 'src/app/components/toolbar/toolbar.component';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComputersComponent } from './pages/computers/computers.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComputersComponent,
    DashboardPanelComponent,
    ToolbarItem,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxSwitchModule,
    DxDataGridModule,
    DxToolbarModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
