import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateAnalysisFormComponent } from './analysisform/createanalysisform.component';
import { HeuristicsComponent } from './heuristicsmanager/heuristicsmanager.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicationComponent } from './application/application.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AnalysisDetailsComponent } from './analysis-details/analysis-details.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        AdminRoutingModule,
        RouterModule,
        FormsModule,
        NgbModule,
        SharedModule,
        FilterPipeModule,
        NgxTypeaheadModule
    ],
    declarations: [
        CreateAnalysisFormComponent,
        HeuristicsComponent,
        AdminComponent,
        UsersComponent,
        ApplicationComponent,
        AnalysisDetailsComponent
    ],
    providers: [
    ]
})
export class AdminModule { }
