import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/core/services/analysis.service';
import { ActivatedRoute } from '@angular/router';
import { tap, takeUntil, flatMap } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from 'src/app/core/common/unsubscribe-on-destroy';

@Component({
  selector: 'app-app-analysis',
  templateUrl: './app-analysis.component.html',
  styleUrls: ['./app-analysis.component.scss']
})
export class AppAnalysisComponent extends UnsubscribeOnDestroy implements OnInit {
  urlParams: any;
  appAnalysis: any;

  constructor(private route: ActivatedRoute, private analysisService: AnalysisService) {
    super();
  }

  ngOnInit() {
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

}
