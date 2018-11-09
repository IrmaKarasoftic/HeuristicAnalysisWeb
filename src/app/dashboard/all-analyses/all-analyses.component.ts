import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../core/services/analysis.service';

@Component({
  selector: 'app-all-analyses',
  templateUrl: './all-analyses.component.html',
  styleUrls: ['./all-analyses.component.scss']
})
export class AllAnalysesComponent implements OnInit {
  allAnalysis: any;
  analysis: any;

  constructor(private analysisService: AnalysisService) { }

  ngOnInit() {
  
    this.analysisService.getAnalysisByUserId(1)
    .subscribe(
      (res) => {
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

}
