import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ImageCropperModule } from 'ngx-image-cropper';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { DialogService } from '../shared/dialog/dialog.service';
import { CoreModule } from './../core/core.module';
import { DotsLoaderComponent } from './dots-loader/dots-loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { SpinnerService } from './spinner/spinner.service';
import { SwitchSliderComponent } from './switch-slider/switch-slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
// Components

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CoreModule,
        RouterModule,
        ImageCropperModule,
        NgbModule
    ],
    declarations: [
        DialogComponent,
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        DotsLoaderComponent,
        ImageCropperComponent,
        ImageUploadComponent,
        SwitchSliderComponent,
        SpinnerComponent,
        CardComponent,
    ],
    exports: [
        DialogComponent,
        LoaderComponent,
        HeaderComponent,
        FooterComponent,
        DotsLoaderComponent,
        ImageCropperComponent,
        ImageUploadComponent,
        SwitchSliderComponent,
        SpinnerComponent,
        CardComponent,
    ],
    providers: [DialogService, SpinnerService, LoaderService]
})
export class SharedModule {
}
