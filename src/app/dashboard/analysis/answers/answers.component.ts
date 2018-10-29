import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  image: File;
  imageSrc: string | ArrayBuffer;
  pastedImages: Array<string> = [];
  constructor() { }

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

}
