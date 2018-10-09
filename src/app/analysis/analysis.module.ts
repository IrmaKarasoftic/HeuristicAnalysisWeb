import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { AnswersComponent } from './answers/answers.component';
const routes: Routes = [
    {
        path: '', component: AnalysisComponent,
        children: [
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(routes),
        AnalysisRoutingModule,
        NgbModule
    ],
    declarations: [
        AnalysisComponent,
        AnswersComponent]
})
export class AnalysisModule { }
