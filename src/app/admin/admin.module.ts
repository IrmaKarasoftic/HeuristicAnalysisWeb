import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { CreateAnalysisFormComponent } from './analysisform/createanalysisform.component';
import { HeuristicsComponent } from './heuristicsmanager/heuristicsmanager.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(routes),
        AdminRoutingModule,
        NgbModule
    ],
    declarations: [
        CreateAnalysisFormComponent,
        HeuristicsComponent,
        AdminComponent,
        UsersComponent
    ],
    providers: [
        AdminService
    ]
})
export class AdminModule { }
