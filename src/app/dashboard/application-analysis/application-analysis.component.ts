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
    description: 'Opis1',
    location: 'Lokacija1',
    level: 1,
    recommendation: 'Preporuka1',
    images: []
  };
  default: Answer = {
    description: '',
    location: '',
    level: 1,
    recommendation: '',
    images: []
  };
  image: File;
  imageSrc: any;
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
    var analysis = this.createModel(this.appAnalysis);
    console.log(analysis);
    this.analysisService.postAnalysisAnswers(analysis).subscribe(
      (res) => {
        alert(res);
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
  
  createModel(analysis) {
    var a : any= {};
    a.appId = analysis.AppId;
    a.versionId = analysis.VersionId;
    a.heuristics = analysis.Heuristics;
    return a;
  }
  AddAnswer() {
    this.answers.push(this.default);
  }

  pastePicture(event: ClipboardEvent, item) {
    event.clipboardData.getData('image/jpg')
    this.image = event.clipboardData.files[0];
    this.getBase64(this.image, item)
  }

  getBase64(image, item) {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.imageSrc = reader.result;
        var model = {
          src : this.imageSrc.toString(),
        }
        item.Images.push(model);
      }
    }
  }

  onFileChange(event, item) {
    if (event.target.files && event.target.files.length > 0) {
      for (const file of event.target.files) {
        this.getBase64(file, item);
      }
    }
  }

  removeFileFromCollection(file: string, item) {
    const index = item.Images.indexOf(file);
    if (index >= 0) {
      item.Images.splice(index, 1);
    }
  }

  clearFileInput() {
    this.fileInput.nativeElement.value = '';
  }

  uploadImage() {
    // const aId = 1;
    // this.model.images = this.Images
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
