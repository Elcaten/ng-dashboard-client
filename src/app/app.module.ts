import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxButtonModule, DxSwitchModule, DxToolbarModule, DxFormModule } from 'devextreme-angular';
import { NavbarComponent, ToolbarItem } from 'src/app/components/navbar/navbar.component';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './components/dashboard-panel/dashboard-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComputersComponent } from './pages/computers/computers.component';
import { ComputerDetailsComponent } from './pages/computer-details/computer-details.component';
import { DxiItemModule } from 'devextreme-angular/ui/nested';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComputersComponent,
    ComputerDetailsComponent,
    DashboardPanelComponent,
    ToolbarItem,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxSwitchModule,
    DxDataGridModule,
    DxFormModule,
    DxiItemModule,
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
