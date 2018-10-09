import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'admin', canActivate: [],
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'dashboard', canActivate: [],
        loadChildren: './analysis/analysis.module#AnalysisModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
