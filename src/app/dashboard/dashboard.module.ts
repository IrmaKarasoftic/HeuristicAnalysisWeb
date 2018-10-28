import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';
import { AnswersComponent } from './analysis/answers/answers.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule,
        DashboardRoutingModule,
        NgbModule
    ],
    declarations: [
        DashboardComponent,
        AnalysisComponent,
        AnswersComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
