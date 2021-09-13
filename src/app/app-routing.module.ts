import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComputersComponent } from './pages/computers/computers.component';
import { ComputerDetailsComponent } from './pages/computer-details/computer-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'computers', component: ComputersComponent },
  { path: 'computers/:computerId', component: ComputerDetailsComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }