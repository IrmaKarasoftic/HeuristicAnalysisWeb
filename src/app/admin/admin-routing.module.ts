import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateAnalysisFormComponent } from './analysisform/createanalysisform.component';
import { HeuristicsComponent } from './heuristicsmanager/heuristicsmanager.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'create-analysis', component: CreateAnalysisFormComponent },
      { path: 'heuristics', component: HeuristicsComponent },
      { path: 'users', component: UsersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
