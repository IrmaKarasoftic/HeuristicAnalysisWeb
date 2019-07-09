import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatePickerAdapter } from './common/custom-datepicker-adapter';
import { AnalysisService } from './services/analysis.service';
import { ApplicationsService } from './services/applications.service';
import { AuthService } from './services/auth.service';
import { DiagramsService } from './services/diagrams.service';
import { HeuristicService } from './services/heuristics.service';
import { ImageUploadService } from './services/image-upload.service';
import { UserService } from './services/user.service';
import { VersionsService } from './services/versions.service';

@NgModule({
  imports: [
  ],
  declarations: [

  ],
  exports: [
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        UserService,
        AnalysisService,
        HeuristicService,
        ApplicationsService,
        ImageUploadService,
        VersionsService,
        DiagramsService,
        {provide: NgbDateAdapter, useClass: CustomDatePickerAdapter},
      ]
    };
  }

}
