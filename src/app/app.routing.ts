import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'analysis', component:AnalysisComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}