import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAnalysesComponent } from './all-analyses/all-analyses.component';
import { ApplicationAnalysisComponent } from './application-analysis/application-analysis.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'analysis', component: AllAnalysesComponent },
      { path: 'app-analysis/:id', component: ApplicationAnalysisComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
