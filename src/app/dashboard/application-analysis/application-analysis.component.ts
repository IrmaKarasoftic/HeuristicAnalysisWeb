import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalysisService } from 'src/app/core/services/analysis.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from 'src/app/core/common/unsubscribe-on-destroy';
import { Answer } from '../dashboard.model';

@Component({
  selector: 'app-application-analysis',
  templateUrl: './application-analysis.component.html',
  styleUrls: ['./application-analysis.component.scss']
})
export class ApplicationAnalysisComponent extends UnsubscribeOnDestroy implements OnInit {
  urlParams: any;
  appAnalysis: any;

  answers: Answer[] = [];

  a1: Answer = {
    opisProblema: 'Opis1',
    lokacijaProblema: 'Lokacija1',
    nivoProblema: 1,
    preporukaZaPoboljsanje: 'Preporuka1'
  };
  default: Answer = {
    opisProblema: '',
    lokacijaProblema: '',
    nivoProblema: 1,
    preporukaZaPoboljsanje: ''
  };
  image: File;
  imageSrc: any;
  pastedImages: Array<any> = [];
  @ViewChild('fileInput') fileInput;
  formData: any;

  
  constructor(private route: ActivatedRoute, private analysisService: AnalysisService) {
    super();
  }
  ngOnInit() {
    this.answers.push(this.a1);
    this.route.params.pipe(tap(params => this.urlParams = params))
      .subscribe(() => {
        var analysisId = parseInt(this.urlParams.id);
          var appAnalysis = this.analysisService.getAnalysisById(analysisId).subscribe(
            (res) => {
              this.appAnalysis = res;
              console.log(res);
            },
            (err: any) => {
              if (err.errors) {
                console.log(err.errors[0]);
              } else if (err.hasError) {
                console.log(err.message);
              }
            }
          );;
          console.log(appAnalysis);
      });
    
  }

  save() {
    console.log(this.appAnalysis);
  }
  
  AddAnswer() {
    this.answers.push(this.default);
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
        var model = {
          src : this.imageSrc.toString(),
        }
        this.pastedImages.push(model);
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
    // const aId = 1;
    // this.model.images = this.pastedImages
    // return this.http.post('http://localhost:52451/api/Image', this.model).subscribe(
    //   (res) => {
    //   },
    //   (err: any) => {
    //     if (err.errors) {
    //       console.log(err.errors[0]);
    //     } else if (err.hasError) {
    //       console.log(err.message);
    //     }
    //   }
    // );
  }
}
