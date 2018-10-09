import { Component, OnInit, ViewChild } from '@angular/core';
import { OkResponse } from '../../core/interfaces/ok-response.interface';
import { ImageUploadService } from '../../core/services/image-upload.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  croppedImage: any = '';
  imageChangedEvent: any = '';

  image: any;
  formData: any;
  error_message: any;
  constructor(private imageUploadService: ImageUploadService) {
  }

  @ViewChild('CropperDialog') public cropperDialog: DialogComponent;
  ngOnInit() {
    this.cropperDialog.hide();
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.cropperDialog.show();
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
  uploadImage() {
    this.imageUploadService.uploadImage(this.croppedImage).subscribe(
      (res: OkResponse<any>) => {
        this.image = res.result;
        this.cropperDialog.hide();
      }
    );
  }

  closeCropperDialog() {
    this.error_message = null;
    this.cropperDialog.hide();
  }
}
