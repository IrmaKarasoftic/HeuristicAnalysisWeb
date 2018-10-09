import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { ImageUploadService } from './services/image-upload.service';
import { UserService } from './services/user.service';

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
        ImageUploadService,
      ]
    };
  }

}
