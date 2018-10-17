import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ImageUploadService } from './services/image-upload.service';
import { UserService } from './services/user.service';
import { HeuristicService } from './services/heuristics.service';
import { ApplicationsService } from './services/applications.service';
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
        HeuristicService,
        ApplicationsService,
        ImageUploadService,
        VersionsService
      ]
    };
  }

}
