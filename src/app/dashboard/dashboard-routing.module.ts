import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'analysis', component: AnalysisComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
