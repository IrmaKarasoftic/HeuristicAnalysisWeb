import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'analysis', component:AnalysisComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent},
  {path:'login', component:LoginComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}