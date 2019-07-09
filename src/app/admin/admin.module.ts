import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AnalysisDetailsComponent } from './analysis-details/analysis-details.component';
import { CreateAnalysisFormComponent } from './analysisform/createanalysisform.component';
import { ApplicationComponent } from './application/application.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { HeuristicsComponent } from './heuristicsmanager/heuristicsmanager.component';
import { UsersComponent } from './users/users.component';
import { VersionDiagramsComponent } from './version-diagrams/version-diagrams.component';
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
    NgxTypeaheadModule,
  ],
  declarations: [
    CreateAnalysisFormComponent,
    HeuristicsComponent,
    AdminComponent,
    UsersComponent,
    ApplicationComponent,
    AnalysisDetailsComponent,
    DiagramsComponent,
    VersionDiagramsComponent,
  ],
  providers: [],
})
export class AdminModule {}
