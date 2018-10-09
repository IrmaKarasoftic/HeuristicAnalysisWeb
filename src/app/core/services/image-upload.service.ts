import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable()
export class ImageUploadService extends BaseService {
    formData: any;
    constructor(
        private http: HttpClient,
    ) {
        super(http);
    }

    uploadImage(image) {
        this.formData = null;
        this.formData = new FormData();
        this.formData.append('FileData', image);
        this.formData.append('FileName', 'user.png');

        this.formData.append('EntityId', '0054de7b-cb0d-4dff-858c-26cbd85163a7');
        this.formData.append('ContentType', 'image/jpg');
        this.formData.append('EntityType', 1);
        this.formData.append('OverwriteFile', 'true');
        return this.http.post(`${this._url}image`, this.formData);
    }
}
