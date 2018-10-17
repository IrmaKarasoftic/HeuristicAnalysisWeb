import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
    imports: [
        AnalysisComponent,
        CommonModule,
        CoreModule,
        RouterModule,
        DashboardRoutingModule,
        NgbModule
    ],
    declarations: [
        DashboardComponent,
        AnalysisComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
