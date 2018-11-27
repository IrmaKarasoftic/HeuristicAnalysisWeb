import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AllAnalysesComponent } from './all-analyses/all-analyses.component';
import { ApplicationAnalysisComponent } from './application-analysis/application-analysis.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        DashboardRoutingModule,
        NgbModule,
        SharedModule,
    ],
    declarations: [
        DashboardComponent,
        AllAnalysesComponent,
        ApplicationAnalysisComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
