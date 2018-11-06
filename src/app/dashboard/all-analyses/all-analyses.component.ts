import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../core/services/analysis.service';

@Component({
  selector: 'app-all-analyses',
  templateUrl: './all-analyses.component.html',
  styleUrls: ['./all-analyses.component.scss']
})
export class AllAnalysesComponent implements OnInit {
  allAnalysis: any;

  constructor(private analysisService: AnalysisService) { }

  ngOnInit() {
  
  }

}
