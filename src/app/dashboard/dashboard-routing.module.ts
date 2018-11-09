import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AllAnalysesComponent } from './all-analyses/all-analyses.component';
import { AppAnalysisComponent } from './app-analysis/app-analysis.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'analysis', component: AllAnalysesComponent },
      { path: 'app-analysis/:id', component: AppAnalysisComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
