import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-all-analyses',
  templateUrl: './all-analyses.component.html',
  styleUrls: ['./all-analyses.component.scss'],
})
export class AllAnalysesComponent implements OnInit {
  allAnalysis: any;
  analysis: any;

  constructor(
    private analysisService: AnalysisService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserId();
    this.analysisService.getAnalysisByUserId(userId).subscribe(
      res => {
        this.analysis = res;
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
  }
  openAnalysis(item) {
    if (!item.Created) {
      const a: any = {};
      a.analysisId = item.AnalysisFormId;
      a.userId = 1;
      this.analysisService.postAnalysisAnswers(a).subscribe(
        res => {
          this.router.navigate(['/dashboard/app-analysis', res.Id]);
        },
        (err: any) => {
          if (err.errors) {
            console.log(err.errors[0]);
          } else if (err.hasError) {
            console.log(err.message);
          }
        }
      );
    } else {
      this.router.navigate(['/dashboard/app-analysis', item.Id]);
    }
  }
}
