import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  image: File;
  imageSrc: string | ArrayBuffer;
  pastedImages: Array<string> = [];
  @ViewChild('fileInput') fileInput;
  formData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  pastePicture(event: ClipboardEvent) {
    event.clipboardData.getData('image/jpg')
    this.image = event.clipboardData.files[0];
    this.getBase64(this.image)
  }

  getBase64(image) {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.imageSrc = reader.result;
        this.pastedImages.push(this.imageSrc.toString());
      }
    }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      for (const file of event.target.files) {
        this.getBase64(file);
      }
    }
  }

  removeFileFromCollection(file: string) {
    const index = this.pastedImages.indexOf(file);
    if (index >= 0) {
      this.pastedImages.splice(index, 1);
    }
  }

  clearFileInput() {
    this.fileInput.nativeElement.value = '';
  }

  uploadImage() {
    return this.http.post('http://localhost:52451/api/Image', this.pastedImages).subscribe(
      (res) => {
      },
      (err: any) => {
        if (err.errors) {
          console.log(err.errors[0]);
        } else if (err.hasError) {
          console.log(err.message);
        }
      }
    );
  }
}
