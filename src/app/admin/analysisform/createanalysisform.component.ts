import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis-form',
  templateUrl: './createanalysisform.component.html',
  styleUrls: ['./createanalysisform.component.css']
})
export class CreateAnalysisFormComponent implements OnInit {
  constructor() {}
  public applications: Array<string> = [];
  public versions: Array<string> = [];
  public heuristics: Array<string> = [];
  ngOnInit() {
    this.applications.push('app1', 'app2', 'app3', 'app4', 'app5');
    this.versions.push('v1', 'v2', 'v3', 'v4', 'v5');
    this.heuristics.push('pitanje1', 'pitanje2', 'pitanje3', 'pitanje4', 'pitanje5');
  }
}
