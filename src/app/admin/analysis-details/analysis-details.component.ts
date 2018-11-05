import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../core/services/analysis.service';
import { ActivatedRoute } from '@angular/router';
import { UnsubscribeOnDestroy } from '../../core/common/unsubscribe-on-destroy';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent extends UnsubscribeOnDestroy implements OnInit {
  urlParams: any;
  analysis: any;

  constructor(private analysisService: AnalysisService,
    private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
  }
}
