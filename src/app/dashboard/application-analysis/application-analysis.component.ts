import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from 'src/app/core/common/unsubscribe-on-destroy';
import { AnalysisService } from 'src/app/core/services/analysis.service';
import { Answer } from '../dashboard.model';

@Component({
  selector: 'app-application-analysis',
  templateUrl: './application-analysis.component.html',
  styleUrls: ['./application-analysis.component.scss'],
})
export class ApplicationAnalysisComponent extends UnsubscribeOnDestroy implements OnInit {
  urlParams: any;
  appAnalysis: any;

  answers: Answer[] = [];

  default: Answer = {
    id: 0,
    description: '',
    location: '',
    level: 1,
    recommendation: '',
    images: [],
  };
  image: File;
  imageSrc: any;
  @ViewChild('fileInput') fileInput;
  formData: any;

  constructor(
    private route: ActivatedRoute,
    private analysisService: AnalysisService,
    private router: Router
  ) {
    super();
  }
  ngOnInit() {
    this.route.params.pipe(tap(params => (this.urlParams = params))).subscribe(() => {
      const analysisId = Number(this.urlParams.id);
      const appAnalysis = this.analysisService.getAnalysisById(analysisId).subscribe(
        res => {
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
      );
    });
  }

  save() {
    this.analysisService.updateAnalysis(this.appAnalysis).subscribe(
      res => {
        this.router.navigate(['/dashboard/analysis']);
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

  cancel() {
    this.router.navigate(['/dashboard/analysis']);
  }
  createModel(analysis) {
    const a: any = {};
    a.analysisId = analysis.AnalysisId;
    a.userId = 1;
    a.heuristics = analysis.Heuristics;
    return a;
  }
  AddAnswer(item) {
    const newObj = Object.assign({}, this.default);
    item.Answers.push(newObj);
  }

  pastePicture(event: ClipboardEvent, item) {
    event.clipboardData.getData('image/jpg');
    this.image = event.clipboardData.files[0];
    this.getBase64(this.image, item);
  }

  getBase64(image, item) {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.imageSrc = reader.result;
        const model = {
          Src: this.imageSrc.toString(),
        };
        item.Images.push(model);
      };
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
