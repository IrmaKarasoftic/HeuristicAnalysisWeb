import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { CoreModule } from '../../core/core.module';
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
    ]
})
export class AnalysisModule { }
