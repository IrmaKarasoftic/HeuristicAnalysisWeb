import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalysisService } from '../../core/services/analysis.service';
import { ApplicationsService } from '../../core/services/applications.service';
import { HeuristicService } from '../../core/services/heuristics.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-analysis-form',
  templateUrl: './createanalysisform.component.html',
  styleUrls: ['./createanalysisform.component.css'],
})
export class CreateAnalysisFormComponent implements OnInit {
  selectedApp: any;
  appVersions: any;
  selectedVersion: any;
  groups: any;
  selectedGroup: any;
  createAppModel: any = {
    appId: null,
    versionId: null,
    heuristics: null,
    groups: null,
  };
  public search = '';

  constructor(
    public applicationService: ApplicationsService,
    public heuristicService: HeuristicService,
    public userService: UserService,
    public analysisService: AnalysisService,
    private router: Router
  ) {}
  public applications: Array<any> = [];
  public versions: Array<any> = [];
  public heuristics: Array<any> = [];
  ngOnInit() {
    this.getAllApps();
    this.getAllHeuristics();
    this.getAllUserGroups();
  }

  getAllApps() {
    this.applicationService.searchApplications().subscribe(
      res => {
        this.applications = res;
        console.log(res);
        this.appVersions = this.applications[0].Versions;

        this.selectedApp = this.applications[0].Id;
        this.selectedVersion = this.appVersions[0].Id;
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

  handleResultSelected(result) {
    const heuristic = this.heuristics.find(x => x.Id === result.Id);
    heuristic.Checked = true;
    this.search = '';
  }

  getAllHeuristics() {
    this.heuristicService.searchHeuristics().subscribe(
      res => {
        this.heuristics = res;
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

  getAllUserGroups() {
    this.userService.searchGroups().subscribe(
      res => {
        this.groups = res;
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

  onAppSelect($event) {
    this.selectedApp = $event;
    const app = this.applications.find(x => x.Id === Number(this.selectedApp));
    this.appVersions = app.Versions;
    this.selectedVersion = this.appVersions[0].Id;
  }

  onVersionSelect($event) {
    this.selectedVersion = $event;
  }

  save() {
    this.createAppModel.appId = this.selectedApp;
    this.createAppModel.versionId = this.selectedVersion;
    this.createAppModel.heuristics = this.heuristics;
    this.createAppModel.groups = this.groups;
    this.analysisService.createAnalysis(this.createAppModel).subscribe(
      res => {
        this.router.navigate(['/admin/applications']);
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
